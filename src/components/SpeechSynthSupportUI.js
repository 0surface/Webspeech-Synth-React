import { useSpeechSynthQueueProvider } from '../SpeechSynthQueueProvider'

export function SpeechSynthSupportUI() {
  const { supported } = useSpeechSynthQueueProvider()
  return (
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
}
