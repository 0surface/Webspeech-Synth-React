import ReactDOM from 'react-dom/client'
import React from 'react'
import { SpeechSynthQueue } from '../src'

const root = ReactDOM.createRoot(document.getElementById('main'))
root.render(
  <React.StrictMode>
    <SpeechSynthQueue />
  </React.StrictMode>
)

//ReactDOM.render(<SpeechSynthUI />, document.getElementById('main'))

//ReactDOM.render(<button>Hi</button>, document.getElementById('main'))
