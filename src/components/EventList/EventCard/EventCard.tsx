import React from 'react'
import {
  EventCardContainer,
  EventCardContent, EventCardDescription, EventCardImageContainer,
  EventCardInfo, EventCardTitle,
} from './EventCard.styles'
import { IEventData } from '../../../types/eventData'

export interface EventCardProps {
  eventData: IEventData
}


const EventCard: React.FC<EventCardProps> =
  ({ eventData }) => {
    return (
      <EventCardContainer to={`/event/${eventData.id}`}>
        <EventCardContent>
          <EventCardInfo
            backgroundColor={eventData.gameModeColor}
            icon={eventData.gameModeIconUrl}
          >
            <EventCardTitle>{eventData.gameMode.toUpperCase()}</EventCardTitle>
            <EventCardDescription>{eventData.mapName}</EventCardDescription>
          </EventCardInfo>

          <EventCardImageContainer image={eventData.mapImageUrl} />
        </EventCardContent>
      </EventCardContainer>
    )
  }

export default EventCard