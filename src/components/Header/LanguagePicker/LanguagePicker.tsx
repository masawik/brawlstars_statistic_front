import React, { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import enLangIcon from '../../../assets/img/countries/united-kingdom.png'
import ruLangIcon from '../../../assets/img/countries/russia.png'
import { Link } from '../../UI/Link'
import Popup from '../../UI/Popup'
import { elementSize, media } from '../../../styles/mixins'

const OpenPickerButton =
  styled(Link).attrs({ as: 'button', linkType: 'icon' })`
    border-radius: 50%;
    border: 2px solid rgba(0, 0, 0, 0.5);
    ${elementSize(35)};
    ${media('md')`${elementSize(45)}`}
    ${media('lg')`
      ${elementSize(55)}
      border: 3px solid rgba(0, 0, 0, 0.5);
    `}
  `

const LanguageButton =
  styled(OpenPickerButton)`
    ${elementSize(60)};
    ${media('lg')`${elementSize(70)}`}
    border: 3px solid rgba(0, 0, 0, 0.5);
  `

const LanguagePickerBody = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`

const languageIconMap: { [key: string]: string } = {
  'en-UK': enLangIcon,
  'ru-RU': ruLangIcon,
}

const LanguagePicker = () => {
  const { i18n, t } = useTranslation('languagePicker')

  const [isOpen, setIsOpen] = useState(false)
  const openPickerWindow = () => setIsOpen(true)
  const closePickerWindow = () => setIsOpen(false)

  const onOpenButtonClick = (e: React.MouseEvent<HTMLElement>) => {
    openPickerWindow()
    e.stopPropagation()
  }

  const $languageButtons = useMemo(() => {
    const changeLanguage = async (lang: string) => {
      await i18n.changeLanguage(lang)
      closePickerWindow()
    }

    return Object.keys(i18n.store.data).map(lang => {
      return (
        <LanguageButton
          key={lang}
          onClick={() => changeLanguage(lang)}
          aria-label={`${t('selectLanguageButtonAria')} ${lang}`}
        >
          <img src={languageIconMap[lang]} alt={`${lang}`} />
        </LanguageButton>
      )
    })
  }, [i18n.store.data])

  return (
    <>
      <OpenPickerButton
        aria-label={t('openPickerButtonAria')}
        onClick={onOpenButtonClick}
      >
        <img src={languageIconMap[i18n.language]}
             alt={`${i18n.language}`} />
      </OpenPickerButton>
      {
        isOpen &&
        <Popup title={t('languagePickerPopupTitle')} onClose={closePickerWindow}>
          <LanguagePickerBody>
            {$languageButtons}
          </LanguagePickerBody>
        </Popup>
      }
    </>
  )
}

export default LanguagePicker