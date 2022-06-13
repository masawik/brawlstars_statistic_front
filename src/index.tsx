import React from 'react'
import 'normalize.css'
import './styles/main.scss'
import ReactDOM from 'react-dom/client'
import App from './App'
import './localization/i18n'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)