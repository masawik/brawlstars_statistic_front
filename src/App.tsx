import React from 'react'
import Header from './components/Header/Header'
import { useTranslation } from 'react-i18next'

function App() {
  const { t } = useTranslation()



  return (
    <>
      <Header />

      <h1>{t('testTitle')}</h1>
    </>
  )
}

export default App
