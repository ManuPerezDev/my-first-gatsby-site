import React from 'react'
import * as styles from './Navigation.module.css'
import Switch from './switch-dark-mode/switch-dark-mode'
import { Link } from 'gatsby'
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa'

const Navigation = () => (
  <nav className={styles.navigation}>
    <div className={styles.container}>
      <div className={`${styles.navLinksItem} ${styles.logo}`}>
        <Link to='/'>🙊 ManuPerezDev</Link>
      </div>
      <div className={styles.buttons}>
        <div className={styles.navLinksItem}>
          <Link to='/'>🏠</Link>
        </div>
        <div className={styles.navLinksItem}>
          <Link href={'https://www.linkedin.com/in/manuel-perez-regalado/'}>
            <FaLinkedin fontSize='1.5em'/>
          </Link>
        </div>
        <div className={styles.navLinksItem}>
          <Link href={'https://github.com/ManuPerezDev'}>
            <FaGithubSquare fontSize='1.5em'/>
          </Link>
        </div>
        <Switch/>
      </div>
    </div>
  </nav>
)

export default Navigation
