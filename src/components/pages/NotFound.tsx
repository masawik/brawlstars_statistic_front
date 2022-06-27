import React from 'react'
import { Container } from '../layout/Container'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Button } from '../UI/Button'
import { useTranslation } from 'react-i18next'
import Plug from '../Plug/Plug'

const BackHomeLink = styled(Button).attrs({ as: Link, color: 'primary' })`
  display: block;
  margin-top: 15px;
`

const NotFound = () => {
  const { t } = useTranslation('notFound')

  const $Content = (
    <>
      {t('pageNotFoundMessage')}
      <BackHomeLink to='/'>{t('backHomeLink')}</BackHomeLink>
    </>
  )

  return (
    <Container>
      <Plug content={$Content} />
    </Container>
  )
}

export default NotFound