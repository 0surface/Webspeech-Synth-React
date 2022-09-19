import createNativeUtterance from './createNativeUtterance'
import {
  VoiceSelector,
  RangePicker,
  TextChunker,
  uuidv4,
} from './speechSynthUtil'

export default function transformCorpus(
  corpus,
  englishVoices,
  chunkSize = 170
) {
  if (englishVoices?.length < 1) return []

  let arr = []
  if (
    !corpus ||
    !englishVoices ||
    corpus.length < 1 ||
    englishVoices.length < 1
  )
    return arr

  try {
    corpus.forEach((corpusItem) => {
      let chunkedText = TextChunker(corpusItem.text, chunkSize)

      const segmentVoice = VoiceSelector(englishVoices)
      let segmentPitch = RangePicker(1, 1.2)
      let segmentRate = RangePicker(1, 1.2)
      let segmentVolume = RangePicker(1, 1.2)
      let lang = ''

      chunkedText.forEach((chunk) => {
        arr.push({
          id: uuidv4(),
          segmentId: corpusItem.id,
          text: chunk,
          utterance: createNativeUtterance({
            lang,
            pitch: segmentPitch,
            rate: segmentRate,
            text: chunk,
            voice: segmentVoice,
            volume: segmentVolume,
          }),
        })
      })
    })
  } catch (err) {
    console.error('transformCorpus::', err)
  }

  return arr
}
