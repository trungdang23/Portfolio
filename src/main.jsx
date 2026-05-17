import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { injectSpeedInsights } from "@vercel/speed-insights"
import { Analytics } from "@vercel/analytics"
import './index.css'
import App from './App.jsx'

injectSpeedInsights()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Analytics />
  </StrictMode>,
)
