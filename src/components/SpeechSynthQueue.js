import { SpeechSynthQueueProvider } from '../SpeechSynthQueueProvider'
import { SpeechSynthUI } from './SpeechSynthUI'

export function SpeechSynthQueue({ corpus }) {
  return (
    <SpeechSynthQueueProvider corpus={corpus}>
      <SpeechSynthUI />
    </SpeechSynthQueueProvider>
  )
}
