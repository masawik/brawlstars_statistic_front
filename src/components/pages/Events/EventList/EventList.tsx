import React from 'react'
import EventCard, { EventCardProps } from './EventCard/EventCard'
import { EventModes } from '../../../../typings/eventModes'
import styled from 'styled-components'
import { placeholder } from '../../../../styles/placeholders'

const eventsData: EventCardProps[] = [
  {
    eventId: 1,
    title: 'MODE 1 MODE 1 MODE 1 MODE 1 MODE 1 MODE 1 MODE 1 ',
    description: 'map 1 map 1 map 1 map 1 map 1 map 1 map 1 map 1 map 1 map 1 map 1 map 1 map 1 map 1 ',
    gameMode: EventModes.GEM_GRAB,
  },
  {
    eventId: 2,
    title: 'MODE 2',
    description: 'map 2',
    gameMode: EventModes.BIG_GAME,
  },
  {
    eventId: 3,
    title: 'MODE 3',
    description: 'map 3',
    gameMode: EventModes.HEIST,
  },
  {
    eventId: 4,
    title: 'MODE 4',
    description: 'map 4',
    gameMode: EventModes.DUO_SHOWDOWN,
  },
  {
    eventId: 5,
    title: 'MODE 5',
    description: 'map 5',
    gameMode: EventModes.TAKEDOWN,
  },
  {
    eventId: 6,
    title: 'MODE 6',
    description: 'map 6',
    gameMode: EventModes.SUPER_CITY_RAMPAGE,
  },
  {
    eventId: 7,
    title: 'MODE 7',
    description: 'map 7',
    gameMode: EventModes.PRESENT_PLUNDER,
  },
]

const EventListUl = styled.ul`
  display: grid;
  row-gap: 20px;
  justify-items: center;

  ${placeholder('resetList')}
`

const EventList = () => {

  const $eventItems = eventsData.map(eventData => (
    <li key={`${eventData.title}_${eventData.description}`}>
      <EventCard
        title={eventData.title}
        description={eventData.description}
        gameMode={eventData.gameMode}
        eventId={eventData.eventId}
      />
    </li>
  ))

  return (
    <EventListUl>
      {$eventItems}
    </EventListUl>
  )
}

export default EventList