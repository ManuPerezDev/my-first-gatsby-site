import React from 'react'
import * as styles from './navigation-desktop.module.css'
import { Link } from 'gatsby'
import Switch from '../switch-dark-mode/switch-dark-mode'
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa'

const NavigationDesktop = () => (
  <div className={styles.navigationDesktop}>
    <Switch/>
    <ul className={styles.navLinks}>
      <li className={styles.navLinksItem}>
        <Link to='/'>🏠 Home</Link>
      </li>
      <li className={styles.navLinksItem}>
        <Link to='/about'>🐼 About</Link>
      </li>
      <li className={styles.navLinksItem}>
        <Link href={'https://www.linkedin.com/in/manuel-perez-regalado/'}>
          <FaLinkedin fontSize='1.5em'/>
        </Link>
      </li>
      <li className={styles.navLinksItem}>
        <Link href={'https://github.com/ManuPerezDev'}>
          <FaGithubSquare fontSize='1.5em'/>
        </Link>
      </li>
    </ul>
  </div>
)

export default NavigationDesktop
