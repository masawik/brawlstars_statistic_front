import React from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'

const LanguagePickerContainer = styled.div`
  display: flex;
  align-items: center;
`

const LanguagePicker = () => {
  const { i18n } = useTranslation()

  const onSelect = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    await i18n.changeLanguage(e.target.value)
  }

  const $languageOptions = Object.keys(i18n.store.data).map(lang => {
    return (
      <option key={lang} value={lang}>
        {lang}
      </option>
    )
  })

  return (
    <LanguagePickerContainer>
      <select value={i18n.language} onChange={onSelect}>
        {$languageOptions}
      </select>
    </LanguagePickerContainer>
  )
}

export default LanguagePicker