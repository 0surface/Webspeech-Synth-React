import createNativeUtterance from './createNativeUtterance'
import { VoiceSelector, RangePicker, JsonSegmenter } from './speechSynthUtil'

export default function transformCorpus(corpus, englishVoices) {
  if (englishVoices?.length < 1) return []
  const segmentArr = JsonSegmenter(corpus, englishVoices)

  try {
    segmentArr?.length > 0 &&
      segmentArr.forEach((item) => {
        const segmentVoice = VoiceSelector(englishVoices)
        let segmentPitch = RangePicker(1, 1.2)
        let segmentRate = RangePicker(1, 1.2)
        let segmentVolume = RangePicker(1, 1.2)
        let lang = ''

        const nativeUtterance = createNativeUtterance({
          lang,
          pitch: segmentPitch,
          rate: segmentRate,
          text: item.text,
          voice: segmentVoice,
          volume: segmentVolume,
        })

        item.utterance = nativeUtterance
      })

    return segmentArr
  } catch (err) {
    console.error('transformCorpus::', err)
  }
}
