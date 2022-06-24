import React from 'react'
import { Container } from '../layout/Container'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Button } from '../UI/Button'

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
  return (
    <Container>
      <NotFoundContainer>
        Requested page not found :(
        <BackHomeLink to='/'>Back home</BackHomeLink>
      </NotFoundContainer>
    </Container>
  )
}

export default NotFound