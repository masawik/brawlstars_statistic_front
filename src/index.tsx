import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './localization/i18n'
import GlobalStyles from './styles/global'
import { defaultTheme } from './styles/defaultTheme'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />

      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
)