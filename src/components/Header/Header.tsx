import React from 'react'
import logoSVG from '../../assets/img/logo-star.png'
import styles from './Header.module.scss'
import LanguagePicker from './LanguagePicker/LanguagePicker'
import cn from 'classnames'

const Header = () => {
  return (
    <div className={styles.header}>
      <div className='container'>
        <div className={styles.header__content}>
          <a
            className={cn(styles.header__logoLink, 'link', 'link--icon')}
            href='#'
          >
            <img src={logoSVG} alt='brawl stars logo' />
          </a>

          <LanguagePicker />
        </div>
      </div>
    </div>
  )
}

export default Header