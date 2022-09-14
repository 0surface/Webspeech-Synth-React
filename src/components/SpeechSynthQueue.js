import { SpeechSynthQueueProvider } from '../SpeechSynthQueueProvider'
import { SpeechSynthUI } from './SpeechSynthUI'

export function SpeechSynthQueue({ text }) {
  return (
    <SpeechSynthQueueProvider text={text}>
      <SpeechSynthUI />
    </SpeechSynthQueueProvider>
  )
}
