import React from 'react'
import Popup from '../UI/Popup'
import { useTranslation } from 'react-i18next'
import styled, { css } from 'styled-components'
import { useAppSelector } from '../../hooks/useAppSelector'
import { selectErrorMessage } from '../../store/errorPopup/errorPopupSelectors'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { errorPopupActions } from '../../store/errorPopup/errorPopupSlice'

const ErrorPopupBody = styled.div`
  text-align: center;
  padding: 20px;
`

const ErrorTitle = styled.span`
  ${({ theme: { color: { types } } }) => css`
    color: ${types.danger.normal};
    font-size: 24px;
  `}
`

const ErrorPopup = () => {
  const { t } = useTranslation('errorPopup')
  const message = useAppSelector(selectErrorMessage)
  const dispatch = useAppDispatch()

  const clearErrorState = () => {
    dispatch(errorPopupActions.clearErrorMessage())
  }

  const $Title = (
    <ErrorTitle>
      {t('title')}
    </ErrorTitle>
  )

  const $ErrorPopup = (
    <Popup onClose={clearErrorState} title={$Title}>
      <ErrorPopupBody>
        {message}
      </ErrorPopupBody>
    </Popup>
  )

  return message ? $ErrorPopup : null
}

export default ErrorPopup