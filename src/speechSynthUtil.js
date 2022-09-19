/**
 * See link for more details on this function
 * https://stackoverflow.com/questions/105034/how-do-i-create-a-guid-uuid
 * @returns
 */
const uuidv4 = () => {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    (c ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4))))
      .toString(16)
      .substring(0, 4)
  )
}

const RangePicker = (min = 1, max = 1.2) => {
  return Math.random() * (max - min) + min
}

const TextChunker = (text, chunkLength = 200) => {
  let arr = []
  if (!text || text?.length < chunkLength) {
    arr.push(text)
    return arr
  }

  var pattRegex = new RegExp(
    '^[\\s\\S]{' +
      Math.floor(chunkLength / 2) +
      ',' +
      chunkLength +
      '}[.!?,]{1}|^[\\s\\S]{1,' +
      chunkLength +
      '}$|^[\\s\\S]{1,' +
      chunkLength +
      '} '
  )

  while (text.length > 0) {
    arr.push(text.match(pattRegex)[0])
    text = text.substring(arr[arr.length - 1].length)
  }

  return arr
}

const VoiceSelector = (voices) => {
  const count = voices.length

  if (count === 0) throw console.error('No voices to select')
  if (count === 1) return voices[0]
  if (count > 1) return voices[Math.floor(Math.random() * count)]
}

const JsonSegmenter = (
  jsonData,
  englishVoices,
  pitch = null,
  rate = null,
  volume = null,
  lang = ''
) => {
  let arr = []
  if (
    !jsonData ||
    !englishVoices ||
    englishVoices.length < 1 ||
    jsonData.length < 1
  )
    return arr

  jsonData.forEach((item) => {
    let chunkedText = TextChunker(item.text, 150)
    const segmentVoice = VoiceSelector(englishVoices)
    segmentPitch = pitch || RangePicker(1, 1.2)
    segmentRate = rate || RangePicker(1, 1.2)
    segmentVolume = volume || RangePicker(1, 1.2)

    chunkedText.forEach((chunk) => {
      const ut = new SpeechSynthesisUtterance(chunk)
      ut.voice = segmentVoice
      ut.text = chunk
      ut.pitch = segmentPitch
      ut.rate = segmentRate
      ut.volume = segmentVolume
      ut.lang = lang

      arr.push({
        id: uuidv4(),
        segmentId: item.id,
        isUttered: false,
        isPaused: false,
        text: chunk,
        utterance: ut,
      })
    })
  })
  return arr
}

export { RangePicker, TextChunker, JsonSegmenter }
