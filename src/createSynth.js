import QueuedUtternace from './QueuedUtterance'

export default function createSynth() {
  let queuedWithCurrent = []
  let running

  const run = async () => {
    if (running) return

    running = true
    try {
      let queuedUtternace
      while ((queuedUtternace = queuedWithCurrent[0])) {
        try {
          await queuedUtternace.speak()
        } catch (err) {
          console.error('createSynth::run::', err)
        }
      }
    } finally {
      running = false
    }
  }

  return (synth, utterance, { onEnd, onError, onStart } = {}) => {
    const queuedUtterance = new QueuedUtternace(synth, utterance, {
      onEnd,
      onError,
      onStart,
    })

    queuedWithCurrent = [...queuedWithCurrent, queuedUtternace]

    run()

    return {
      // The cancel() function returns a Promise
      cancel: () => queuedUtterance.cancel(),
    }
  }
}
