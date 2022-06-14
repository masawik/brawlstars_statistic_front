import React from 'react'
import Header from './components/Header/Header'
import { useTranslation } from 'react-i18next'
import Events from './components/Events/Events'

function App() {
  const { t } = useTranslation()

  return (
    <>
      <Header />

      <Events />
    </>
  )
}

export default App
