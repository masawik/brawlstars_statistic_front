import React from 'react'
import { useParams } from 'react-router-dom'
import { Container } from '../../UI/Container'
import BrawlerTable from './BrawlerTable/BrawlerTable'

const Event = () => {
  const { eventId } = useParams()

  return (
    <Container>
      event id: {eventId}

      <BrawlerTable />
    </Container>
  )
}

export default Event