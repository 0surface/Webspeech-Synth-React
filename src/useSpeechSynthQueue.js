import { useCallback, useMemo, useState, useEffect } from 'react'

export function useSpeechSynthQueue(id, segmentId, text, pitch, rate, voice) {
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
        setQueued({ id, segmentId, text, pitch, rate, voice })
      } catch (err) {
        console.error('useSpeechSynthQueue::', err)
      }
    }
  }, [synth, voices])

  const addToQueue = useCallback(() => {
    console.log('addToQueue')
  }, [])

  const playQueue = useCallback(() => {
    console.log('playQueue')
  }, [])

  const pauseQueue = useCallback(() => {
    console.log('pauseQueue')
  }, [])

  const clearQueue = useCallback(() => {
    console.log('clearQueue')
  }, [])

  return {
    addToQueue,
    playQueue,
    pauseQueue,
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
