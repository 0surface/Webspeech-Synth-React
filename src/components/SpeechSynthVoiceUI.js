import { useSpeechSynthQueueProvider } from '../SpeechSynthQueueProvider'

export const SpeechSynthVoiceUI = () => {
  const { voices, englishVoices } = useSpeechSynthQueueProvider()

  return (
    <div
      style={{
        border: 'solid 1px',
        padding: '2px',
        margin: '2px',
      }}
    >
      <p>
        Avialable Browser Voices :
        {voices !== undefined && voices !== undefined && voices.length
          ? voices.length
          : 'None'}
      </p>
      <h4>
        {englishVoices && (
          <p>
            English Voices:
            {englishVoices.map((ev) => (
              <button
                key={ev.voiceURI}
                style={{
                  borderRadius: '12px',
                  margin: '1px 3px',
                  padding: '1px 5px',
                }}
              >
                {ev.name}
              </button>
            ))}
          </p>
        )}
      </h4>
    </div>
  )
}
