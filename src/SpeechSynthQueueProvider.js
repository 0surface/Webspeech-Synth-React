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
  clearQueue: () => {},
})

export function useSpeechSynthQueueProvider() {
  return useContext(SpeechSynthQueueContext)
}

export function SpeechSynthQueueProvider({ text, children }) {
  const {
    queued,
    speech,
    supported,
    voices,
    englishVoices,
    addToQueue,
    playQueue,
    pauseQueue,
    clearQueue,
  } = useSpeechSynthQueue(text)

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
        clearQueue,
      }}
    >
      {children}
    </SpeechSynthQueueContext.Provider>
  )
}
