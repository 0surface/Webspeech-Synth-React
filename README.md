# React Web Speech API Speech Synthesis

React wrapper Hooks and components that wrap the Web Speech API's Speech Synthesis interface.

- Uses an internal queue to manage speech utterances.
- Segments large text into chunks to avoid abrupt voice cutoff on some browsers after ~15 seconds.
- Uses different voices, when available in the browser, for text labeled with different ids.

### HOW TO USE

Add to your project from npm

`npm i webspeech-synth-react`

Add the queue component with a json Array input, that has at least one object with string id and text properties

```
function App() {
  const jsonData = [{id:"42", "text":"The quick brown fox jumped over the lazy dog."}]
  return (
     <SpeechSynthQueue corpus={jsonData}/>
  );
}

```

### EXAMPLE

To run the included example:
`sh example/run.sh`

### DEPENDENCIES

`react >= 18.2.0`

### TODO

- Create basic, opinionted, lite versions of the UI widget
- Display, track the current utterance that is voiced out by the web browser on the UI
- Remove short-uuid dependency

### ATTRIBUTION

The structure of the project and code layout was inspired by [react-speech-synth](https://github.com/dblodorn/react-speech-synth) and [react-say](https://github.com/compulim/react-say)
