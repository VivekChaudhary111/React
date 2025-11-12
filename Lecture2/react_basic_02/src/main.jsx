import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'  // for default export
import { App, Div } from './App.jsx' // for named export 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Div /> */}
  </StrictMode>,
)
