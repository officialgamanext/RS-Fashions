import React from 'react'
import ReactDOM from 'react-dom/client'
// ⚠️ Bootstrap CSS must be the FIRST JS import so it appears at the
// top of the production CSS bundle, before any component CSS.
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)