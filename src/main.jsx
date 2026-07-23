import React from 'react'
import ReactDOM from 'react-dom/client'
// ⚠️ All third-party CSS must be imported here (as JS imports, before App)
// so they appear at the TOP of the production CSS bundle.
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'swiper/css'
import 'swiper/css/navigation'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)