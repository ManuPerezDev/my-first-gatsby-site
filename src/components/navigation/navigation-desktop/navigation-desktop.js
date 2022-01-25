import React from 'react'
import * as styles from './navigation-desktop.module.css'
import { Link } from 'gatsby'
import Switch from '../switch-dark-mode/switch-dark-mode'
import SocialMedia from '../../social-media/social-media'

const NavigationDesktop = () => (
  <div className={styles.navigationDesktop}>
    <Switch/>
    <ul className={styles.navLinks}>
      <li className={styles.navLinksItem}>
        <Link to='/'>Home</Link>
      </li>
      <li className={styles.navLinksItem}>
        <Link to='/blog'>Blog</Link>
      </li>
      <li className={styles.navLinksItem}>
        <SocialMedia/>
      </li>
    </ul>
  </div>
)

export default NavigationDesktop
