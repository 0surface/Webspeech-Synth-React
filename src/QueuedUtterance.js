const speakUtterance = async (synth, utterance, startCallback) => {
  synth.speak(utterance)
}

export default class QueuedUtternace {
  constructor(synth, utternace, { onEnd, onError, onStart }) {
    this._synth = synth
    this._utterance = utternace
    this._onEnd = onEnd
    this._onError = onError
    this._onStart = onStart
    this._speaking = false
    this._cancelled = false
  }

  async cancel() {
    this._cancelled = true
    this._cancel && (await this._cancel())
  }

  async speak() {
    this._speaking = true

    await speakUtterance(this._synth, this._utterance, () => {
      console.log('startCallback...')
    })
  }
}
