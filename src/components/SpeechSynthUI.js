import React from 'react'
import { useSpeechSynthQueueProvider } from '../SpeechSynthQueueProvider'
import { SpeechSynthButton } from './SpeechSynthButton'

export function SpeechSynthUI() {
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
  } = useSpeechSynthQueueProvider()

  //if (!supported) return null

  return (
    <>
      <div>
        <div>
          <button onClick={() => console.log('Do Button')}>Do</button>
        </div>
        <SpeechSynthButton handler={addToQueue}>ADD</SpeechSynthButton>
        <SpeechSynthButton handler={playQueue}>PLAY</SpeechSynthButton>
        <SpeechSynthButton handler={pauseQueue}>PAUSE</SpeechSynthButton>
        <SpeechSynthButton handler={clearQueue}>CLEAR</SpeechSynthButton>
        <div>
          {speech?.voices && speech.voices.length ? (
            <div>{voices.length}</div>
          ) : null}{' '}
        </div>
        {console.log('START STATE ====================')}
        {console.log('SUPPORTED', supported)}
        {console.log('SPEECH', speech)}
        {console.log('QUEUED', queued)}
        {console.log('VOICES', voices)}
        {console.log('ENGLSIH_VOICES', englishVoices)}
        {console.log('END STATE ====================')}
      </div>
    </>
  )
}

{
  /* <div style={{ flex }}>
        <div>
          <button onClick={() => console.log('Do Button')}>Do</button>
        </div>
        <button onClick={addToQueue}>Add</button>
        <button onClick={playQueue}>Play</button>
        <button onClick={pauseQueue}>Pause</button>
        <button onClick={clearQueue}>Clear</button>
        <div>
          {speech?.voice && speech.voices.length ? (
            <div>{voices.length}</div>
          ) : null}{' '}
        </div>
      </div>
    </> */
}
