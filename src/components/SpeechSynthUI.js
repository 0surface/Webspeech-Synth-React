import React from 'react'
import { useSpeechSynthQueueProvider } from '../SpeechSynthQueueProvider'
import { SpeechSynthButton } from './SpeechSynthButton'

export function SpeechSynthUI() {
  const {
    queued,
    utternaceQueue,
    speech,
    supported,
    voices,
    englishVoices,
    addToQueue,
    playQueue,
    pauseQueue,
    resumeQueue,
    clearQueue,
  } = useSpeechSynthQueueProvider()

  if (!supported) return null

  let supportStatus = (
    <div style={{ border: 'solid 1px', padding: '3px', margin: '3px' }}>
      <h3>
        <p
          style={{
            color: supported ? 'green' : 'red',
            alignContent: 'center',
            fontWeight: 'bold',
          }}
        >
          {supported ? 'Speech Synth On' : 'Browser Can Speech Synthesise'}
        </p>
      </h3>
    </div>
  )

  let voiceStatus = (
    <div style={{ border: 'solid 1px', padding: '2px', margin: '2px' }}>
      <p>
        Browser Voices :
        {speech?.voices && speech.voices.length ? voices.length : 'None'}
      </p>
      <h4>
        <p>English Voices {englishVoices.map((ev) => `[ ${ev.name} ]`)}</p>
      </h4>
    </div>
  )
  let stateLog = [
    console.log('START STATE ===================='),
    console.log('SUPPORTED', supported),
    console.log('SPEECH', speech),
    console.log('QUEUED', queued),
    console.log('VOICES', voices),
    console.log('ENGLSIH_VOICE', englishVoices),
    console.log('END STATE ===================='),
  ]

  let content = (
    <>
      <div style={{ width: '70%' }}>
        {supportStatus}

        <div style={{ border: 'solid 1px', padding: '3px', margin: '3px' }}>
          <SpeechSynthButton handler={addToQueue} bgcolor={'grey'}>
            ADD
          </SpeechSynthButton>
          <SpeechSynthButton handler={playQueue} bgcolor={'#4CAF50'}>
            PLAY
          </SpeechSynthButton>
          <SpeechSynthButton handler={pauseQueue} bgcolor={'orange'}>
            PAUSE
          </SpeechSynthButton>
          <SpeechSynthButton handler={resumeQueue} bgcolor={'lime'}>
            RESUME
          </SpeechSynthButton>
          <SpeechSynthButton handler={clearQueue} bgcolor={'red'}>
            CLEAR
          </SpeechSynthButton>

          {process.env.NODE_ENV === 'development' && stateLog}
        </div>
        {voiceStatus}
      </div>
    </>
  )

  return content
}
