import { useState } from 'react'
import { useSpeechSynthQueueProvider } from '../SpeechSynthQueueProvider'

export function SpeechUtteranceUI() {
  const [toggle, setToggle] = useState(false)

  const { queued } = useSpeechSynthQueueProvider()

  let utteranceContent = (
    <div style={{ border: 'solid 1px', padding: '3px', margin: '3px' }}>
      <div>
        <button
          style={{
            borderRadius: '8px',
            margin: '4px 4px',
            padding: '4px 4px',
            width: '10%',
          }}
          onClick={() => setToggle(!toggle)}
        >
          {toggle ? 'HIDE' : 'SHOW'}
        </button>
      </div>
      {toggle && (
        <ul>
          {queued?.length > 0 &&
            queued?.map((q) => (
              <li
                key={q.id}
                style={{
                  border: 'solid 1px',
                  textAlign: 'left',
                  margin: '5px',
                }}
              >
                <div
                  style={{
                    backgroundColor: 'grey',
                    width: '50%',
                    alignItems: 'center',
                    textAlign: 'center',
                  }}
                >
                  {q.id} --- {q.segmentId}
                </div>
                <div style={{ margin: '2px' }}>{q.text}</div>
                <div
                  style={{
                    display: 'inline-block',
                    margin: '3px',
                    padding: '3px',
                  }}
                >
                  <button>{q.utterance?.pitch}</button>
                  <button>{q.utterance?.rate}</button>
                  <button>{q.utterance?.voice?.name}</button>
                  <button>{q.isuttered ? 'DONE' : 'PENDING'}</button>
                </div>
              </li>
            ))}
        </ul>
      )}
    </div>
  )
  return utteranceContent
}
