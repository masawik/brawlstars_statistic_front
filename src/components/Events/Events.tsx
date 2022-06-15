import React from 'react'
import styles from './Events.module.scss'
import Event, { EventProps } from '../Event/Event'
import { EventModes } from '../../typings/eventModes'
import cn from 'classnames'

const Events = () => {

  const eventsData: EventProps[] = [
    { title: 'MODE 1', description: 'map 1', gameMode: EventModes.GEM_GRAB },
    { title: 'MODE 2', description: 'map 2', gameMode: EventModes.BIG_GAME },
    { title: 'MODE 3', description: 'map 3', gameMode: EventModes.HEIST },
    {
      title: 'MODE 4',
      description: 'map 4',
      gameMode: EventModes.DUO_SHOWDOWN,
    },
    { title: 'MODE 5', description: 'map 5', gameMode: EventModes.TAKEDOWN },
    {
      title: 'MODE 6',
      description: 'map 6',
      gameMode: EventModes.SUPER_CITY_RAMPAGE,
    },
    {
      title: 'MODE 7',
      description: 'map 7',
      gameMode: EventModes.PRESENT_PLUNDER,
    },
  ]

  const $eventList = eventsData.map(eventData => (
    <li key={`${eventData.title}_${eventData.description}`}
        className={styles.events__listItem}>
      <Event
        title={eventData.title}
        description={eventData.description}
        gameMode={eventData.gameMode}
      />
    </li>
  ))

  return (
    <section className={styles.events}>
      <div className='container'>
        <ul className={cn(styles.events__list, 'reset')}>
          {$eventList}
        </ul>
      </div>
    </section>
  )
}

export default Events