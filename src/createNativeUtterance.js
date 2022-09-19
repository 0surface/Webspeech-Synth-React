export default function createNativeUtterance({
  lang,
  onBoundary,
  onFoo,
  pitch,
  rate,
  text,
  voice,
  volume,
}) {
  const utterance = new SpeechSynthesisUtterance(text)
  let targetVoice
  //TODO: check | set voice is typeof of function, SpeechSynthesis voice or voice URI

  targetVoice = voice

  // Edge will mute if "lang" is set to ""
  utterance.lang = lang || ''

  if (pitch || pitch === 0) {
    utterance.pitch = pitch
  }

  if (rate || rate === 0) {
    utterance.rate = rate
  }

  if (volume || volume === 0) {
    utterance.volume = volume
  }

  // Cognitive Services will error when "voice" is set to "null"
  // Edge will error when "voice" is set to "undefined"
  if (targetVoice) {
    utterance.voice = targetVoice
  }

  // Since browser quirks, start/error/end events are emulated for best compatibility
  // start/error/end events are emulated in QueuedUtterance

  onBoundary && utterance.addEventListener('boundary', onBoundary)
  onFoo && utterance.addEventListener('foo', onFoo)
  // onEnd && utterance.addEventListener('end', onEnd);
  // onError && utterance.addEventListener('error', onError);
  // onStart && utterance.addEventListener('start', onStart);

  return utterance
}
