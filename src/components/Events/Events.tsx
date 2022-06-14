import React from 'react'
import styles from './Events.module.scss'
import Event from '../Event/Event'
import { EventModes } from '../../typings/eventModes'

const Events = () => {
  return (
    <section className={styles.events}>
      <div className='container'>
        <Event
          title='GEM GRUB'
          description='test map name'
          gameMode={EventModes.GEM_GRAB}
        />
      </div>
    </section>
  )
}

export default Events