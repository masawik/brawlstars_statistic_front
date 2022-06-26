import React from 'react'
import { Container } from '../layout/Container'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Button } from '../UI/Button'
import { useTranslation } from 'react-i18next'

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const BackHomeLink = styled(Button).attrs({ as: Link, color: 'success' })`
  display: block;
  margin-top: 15px;
`

const NotFound = () => {
  const { t } = useTranslation('notFound')

  return (
    <Container>
      <NotFoundContainer>
        {t('pageNotFoundMessage')}
        <BackHomeLink to='/'>{t('backHomeLink')}</BackHomeLink>
      </NotFoundContainer>
    </Container>
  )
}

export default NotFound