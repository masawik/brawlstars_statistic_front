import React from 'react'
import EventCard from './EventCard/EventCard'
import styled from 'styled-components'
import { placeholder } from '../../styles/placeholders'
import { IEventData } from '../../types/eventData'
import { media } from '../../styles/mixins'

const EventListUl = styled.ul`
  display: grid;
  gap: 20px;
  justify-items: center;

  ${placeholder('resetList')};
  ${media('md')`
    grid-template-columns: repeat(2, 1fr);
  `}
  ${media('lg')`
    gap: 30px;
    grid-template-columns: repeat(3, 1fr);
  `}
  ${media('wd')`
    gap: 40px;
    grid-template-columns: repeat(4, 1fr);
  `}
`

const EventListLi = styled.li`
  display: contents;
`

interface IEventListProps {
  events: IEventData[]
}

const EventList: React.FC<IEventListProps> = ({ events }) => {

  const $eventItems = events.map(eventData => (
    <EventListLi key={`${eventData.id}`}>
      <EventCard eventData={eventData} />
    </EventListLi>
  ))

  return (
    <EventListUl>
      {$eventItems}
    </EventListUl>
  )
}

export default EventList