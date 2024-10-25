import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './app'
// import Card from './components/card'
import Bg from './components/Bg'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Bg/>
  </StrictMode>,
)
