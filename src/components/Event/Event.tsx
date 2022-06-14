import React from 'react'
import styles from './Event.module.scss'
import defaultEventImage from '../../assets/img/map_23b.png'
import { EventModes } from '../../typings/eventModes'
import getColorAndImageByGameMode from './getColorAndImageByGameMode'

interface EventProps {
  title: string
  description: string
  gameMode: EventModes
  backgroundImagePath?: string
}

const Event: React.FC<EventProps> =
  ({
     title,
     description,
     backgroundImagePath = defaultEventImage,
     gameMode,
   }) => {

    const { gameModeIconPath, gameModeColor } =
      getColorAndImageByGameMode(gameMode)

    const eventImageStyles: React.CSSProperties =
      { backgroundImage: `url(${backgroundImagePath})` }

    const eventInfoStyles: React.CSSProperties =
      {
        backgroundColor: gameModeColor,
        backgroundImage: `url(${gameModeIconPath})`,
      }

    return (
      <div className={styles.event}>
        <div className={styles.event__content}>
          <div style={eventInfoStyles} className={styles.event__info}>
            <div className={styles.event__title}>{title}</div>

            <div className={styles.event__description}>{description}</div>
          </div>

          <div style={eventImageStyles} className={styles.event__image} />
        </div>
      </div>
    )
  }

export default Event