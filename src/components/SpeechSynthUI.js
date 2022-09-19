import { useSpeechSynthQueueProvider } from '../SpeechSynthQueueProvider'
import { SpeechSynthButton } from './SpeechSynthButton'
import { SpeechUtteranceUI } from './SpeechUtteranceUI'
import { SpeechSynthSupportUI } from './SpeechSynthSupportUI'
import { SpeechSynthVoiceUI } from './SpeechSynthVoiceUI'

const logIsStrue = process.env.REACT_APP_LOG_ENABLED === 'true' ? true : false

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
    resumeQueue,
    clearQueue,
  } = useSpeechSynthQueueProvider()

  if (!supported) return null

  let buttonContent = (
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
    </div>
  )

  let stateLog = []
  logIsStrue
    ? (stateLog = [
        console.log('START STATE ===================='),
        console.log('SUPPORTED', supported),
        console.log('SPEECH', speech),
        console.log('QUEUED', queued),
        console.log('VOICES', voices),
        console.log('ENGLSIH_VOICE', englishVoices),
        console.log('END STATE ===================='),
      ])
    : []

  return (
    <>
      <div
        style={{
          width: '70%',
          border: 'solid 2px',
          borderRadius: '12px',
          margin: '5px',
          padding: '5px',
        }}
      >
        {stateLog}
        <SpeechSynthSupportUI />
        {buttonContent}
        <SpeechSynthVoiceUI />
        <SpeechUtteranceUI />
      </div>
    </>
  )
}
