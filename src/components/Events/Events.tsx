import React from 'react'
import styles from './Events.module.scss'

const Events = () => {

  return (
    <section className={styles.events}>
      <div className='container'>
        <div className='events__content'>
          <h1 className={styles.events__title}>
            Events
          </h1>

          <button type='button' className='btn-reset btn btn--primary'>
            Current
          </button>

          <button type='button' className='btn-reset btn btn--success'>
            Current
          </button>

          <button type='button' className='btn-reset btn btn--danger'>
            Current
          </button>

          <button type='button' className='btn-reset btn btn--warning'>
            Current
          </button>
          <br />
          <a className='link' href='#'>Ссылка</a>
        </div>
      </div>
    </section>
  )
}

export default Events