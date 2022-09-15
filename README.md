# React Web Speech API Speech Synthesis

React wrapper Hooks and components that wrap the Web Speech API's Speech Synthesis interface.

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

### DEPENDENCIES

`short-uuid` and `@babel/runtime`

### TODO

- Display, track the current utterance that is voiced out by the web browser on the UI
