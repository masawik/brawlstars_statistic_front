import React, { useEffect, useState } from 'react'
import { Container } from '../../UI/Container'
import EventList from '../../EventList/EventList'
import styled from 'styled-components'
import Loader from '../../UI/Loader'
import Api from '../../../packages/api'
import { IEventData } from '../../../types/event'

const Title = styled.h1`
  margin-bottom: 20px;
  text-align: center;
`

const CurrentEvents = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [eventsData, setEventsData] = useState<IEventData[]>([])

  useEffect(() => {
    setIsLoading(true)

    Api
      .getCurrentEvents()
      .then(data => {
        setEventsData(data)
        setIsLoading(false)
      })
  }, [])

  return (
    <section>
      <Container>
        <Title>Current events</Title>
        {isLoading && <Loader />}

        {!isLoading &&
        (
          eventsData.length
            ? <EventList events={eventsData} />
            : 'no event data'
        )}
      </Container>
    </section>
  )
}

export default CurrentEvents