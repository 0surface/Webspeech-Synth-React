import { useCallback, useMemo, useState, useEffect } from 'react'
import { JsonSegmenter } from './speechSynthUtil'

export function useSpeechSynthQueue(corpus) {
  const [queued, setQueued] = useState([])
  const [voices, setVoices] = useState([])
  const [englishVoices, setEnglishVoices] = useState([])
  const [supported, setSupported] = useState(false)

  const synth = useMemo(() => {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      return window.speechSynthesis
    } else {
      return undefined
    }
  }, [])

  useEffect(() => {
    if (typeof window !== 'undefined' && synth) {
      setSupported(true)
      const getVoices = window.speechSynthesis.getVoices()
      setVoices(getVoices)

      const _englishVoices = getVoices.filter(function (v) {
        return v.lang.includes('en')
      })
      setEnglishVoices(_englishVoices)
    }
  }, [synth])

  useEffect(() => {
    if (synth && voices) {
      try {
        const segmentArr = JsonSegmenter(corpus, englishVoices)
        segmentArr && segmentArr.length > 0 && setQueued(segmentArr)
      } catch (err) {
        console.error('useSpeechSynthQueue::', err)
      }
    }
  }, [synth, voices, voices, englishVoices])

  const addToQueue = useCallback(() => {
    console.log('addToQueue')
    try {
      // Firefox
      if (queued.length < 1) {
        const segmentArr = JsonSegmenter(corpus, englishVoices)
        segmentArr && segmentArr.length > 0 && setQueued(segmentArr)
      }
    } catch (err) {
      console.error('Add to queue::', err)
    }
  }, [queued])

  const playQueue = useCallback(
    (e) => {
      e.preventDefault()
      console.log('playQueue:event', e)
      console.log('state check', englishVoices)
      console.log('queued', queued[0])

      synth?.cancel()

      queued.forEach((q) => {
        const ut = q.utterance
        console.log('current Utternace::', q.utterance)
        synth?.speak(q.utterance)
        q.isPlayed = true
      })
    },
    [queued, synth]
  )

  const pauseQueue = useCallback(() => {
    console.log('pauseQueue')
    synth?.pause()
  }, [queued, synth])

  const resumeQueue = useCallback(() => {
    console.log('resumeQueue')
    synth?.resume()
  }, [queued, synth])

  const clearQueue = useCallback(() => {
    console.log('clearQueue')
    synth?.cancel()
    setQueued([])
  }, [queued, synth])

  return {
    addToQueue,
    playQueue,
    pauseQueue,
    resumeQueue,
    clearQueue,
    queued,
    speech: {
      synth: synth,
      voices: voices,
    },
    supported,
    voices,
    englishVoices,
  }
}
