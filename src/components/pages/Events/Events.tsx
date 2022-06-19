import React from 'react'
import { Container } from '../../UI/Container'
import EventList from './EventList/EventList'
import styled from 'styled-components'

const Title = styled.h1`
  margin-bottom: 20px;
  text-align: center;
`

const Events = () => {

  return (
    <section>
      <Container>
        <Title>Current events</Title>

        <EventList />
      </Container>
    </section>
  )
}

export default Events