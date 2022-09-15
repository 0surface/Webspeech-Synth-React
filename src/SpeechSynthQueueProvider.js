import { createContext, useContext } from 'react'
import { useSpeechSynthQueue } from './useSpeechSynthQueue'

const SpeechSynthQueueContext = createContext({
  queued: [],
  speech: undefined,
  supported: false,
  voices: [],
  englishVoices: [],
  addToQueue: () => {},
  playQueue: () => {},
  pauseQueue: () => {},
  resumeQueue: () => {},
  clearQueue: () => {},
})

export function useSpeechSynthQueueProvider() {
  return useContext(SpeechSynthQueueContext)
}

export function SpeechSynthQueueProvider({ corpus, children }) {
  const {
    queued,
    speech,
    supported,
    voices,
    englishVoices,
    addToQueue,
    playQueue,
    pauseQueue,
    resumeQueue,
    clearQueue,
  } = useSpeechSynthQueue(corpus)

  return (
    <SpeechSynthQueueContext.Provider
      value={{
        queued,
        speech,
        supported,
        voices,
        englishVoices,
        addToQueue,
        playQueue,
        pauseQueue,
        resumeQueue,
        clearQueue,
      }}
    >
      {children}
    </SpeechSynthQueueContext.Provider>
  )
}
