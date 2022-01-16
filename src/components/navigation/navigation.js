import React from 'react'
import * as styles from './navigation.module.css'
import { Link } from 'gatsby'
import Switch from './switch-dark-mode/switch-dark-mode'

const Navigation = () => (
  <nav>
    <ul className={styles.navLinks}>
      <li className={styles.navLinksItem}>
        <Link to='/'>
          <p>Home</p>
        </Link>
      </li>
      <li className={styles.navLinksItem}>
        <Link to='/about'>
          <p>About</p>
        </Link>
      </li>
      <li className={styles.navLinksItem}>
        <Link to='/blog'>
          <p>Blog</p>
        </Link>
      </li>
      <li className={styles.navLinksItem}>
        <Switch/>
      </li>
    </ul>
  </nav>
)

export default Navigation
