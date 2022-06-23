import React from 'react'
import EventCard from './EventCard/EventCard'
import styled from 'styled-components'
import { placeholder } from '../../styles/placeholders'
import { IEventData } from '../../types/eventData'

const EventListUl = styled.ul`
  display: grid;
  row-gap: 20px;
  justify-items: center;

  ${placeholder('resetList')}
`

interface IEventListProps {
  events: IEventData[]
}

const EventList: React.FC<IEventListProps> = ({ events }) => {

  const $eventItems = events.map(eventData => (
    <li key={`${eventData.id}`}>
      <EventCard eventData={eventData} />
    </li>
  ))

  return (
    <EventListUl>
      {$eventItems}
    </EventListUl>
  )
}

export default EventList