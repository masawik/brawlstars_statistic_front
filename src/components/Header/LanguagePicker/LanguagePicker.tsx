import React from 'react'
import styles from './LanguagePicker.module.scss'
import { useTranslation } from 'react-i18next'


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
    <div className={styles.languagePicker}>
      <select value={i18n.language} onChange={onSelect}>
        {$languageOptions}
      </select>
    </div>
  )
}

export default LanguagePicker