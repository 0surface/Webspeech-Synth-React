import { useCallback, useMemo, useState } from 'react'

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

      setEnglishVoices(voices.filter((v) => v.lang.includes('en')))
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

  const addToQueue = useCallback(() => {}, [])

  const playQueue = useCallback(() => {}, [])

  const pauseQueue = useCallback(() => {}, [])

  const clearQueue = useCallback(() => {}, [])

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
