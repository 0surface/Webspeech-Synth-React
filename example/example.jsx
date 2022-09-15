import ReactDOM from 'react-dom/client'
import React from 'react'
import { SpeechSynthQueue } from '../src'
import { data } from './demofile'

const root = ReactDOM.createRoot(document.getElementById('main'))
root.render(
  <React.StrictMode>
    <SpeechSynthQueue corpus={data} />
  </React.StrictMode>
)
