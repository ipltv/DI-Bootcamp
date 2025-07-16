import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

let element = (<h2>
  hel
  lo 
  {1+1}
  </h2>);

createRoot(document.getElementById('root')).render(
  <App />
)
