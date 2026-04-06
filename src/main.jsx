import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import KendallsCleaning from './KendallsCleaning'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <KendallsCleaning />
  </StrictMode>
)

