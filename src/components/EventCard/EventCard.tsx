import React from 'react'
import styles from './EventCard.module.scss'
import defaultEventImage from '../../assets/img/map_23b.png'
import { EventModes } from '../../typings/eventModes'
import getGameModeData from './getGameModeData'

export interface EventCardProps {
  title: string
  description: string
  gameMode: EventModes
  backgroundImagePath?: string
}

const EventCard: React.FC<EventCardProps> =
  ({
     title,
     description,
     backgroundImagePath = defaultEventImage,
     gameMode,
   }) => {

    const { gameModeIconPath, gameModeColor } =
      getGameModeData(gameMode)

    const eventImageStyles: React.CSSProperties =
      { backgroundImage: `url(${backgroundImagePath})` }

    const eventInfoStyles: React.CSSProperties =
      {
        backgroundColor: gameModeColor,
        backgroundImage: `url(${gameModeIconPath})`,
      }

    return (
      <a href='#' className={styles.event}>
        <div className={styles.event__content}>
          <div style={eventInfoStyles} className={styles.event__info}>
            <div className={styles.event__title}>{title}</div>

            <div className={styles.event__description}>{description}</div>
          </div>

          <div style={eventImageStyles} className={styles.event__image} />
        </div>
      </a>
    )
  }

export default EventCard