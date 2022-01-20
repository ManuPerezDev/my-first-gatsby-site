import React from 'react'
import * as styles from './navigation.module.css'
import { Link } from 'gatsby'
import Switch from './switch-dark-mode/switch-dark-mode'
import { GiHamburgerMenu } from 'react-icons/gi'
import { mobileMenu } from './mobile-menu/mobile-menu-handler'
import MobileMenu from './mobile-menu/mobile-menu'

const Navigation = () => (
  <nav>
    <div className={styles.navigationMobile}>
      <Switch/>
      <GiHamburgerMenu size={30} onClick={mobileMenu}/>
    </div>
    <div className={styles.navigationDesktop}>
       <Switch/>
       <ul className={styles.navLinks}>
        <li className={styles.navLinksItem}>
          <Link to='/'>Home</Link>
        </li>
        <li className={styles.navLinksItem}>
          <Link to='/about'>About</Link>
        </li>
        <li className={styles.navLinksItem}>
          <Link to='/blog'>Blog</Link>
        </li>
       </ul>
    </div>
    <MobileMenu/>
  </nav>
)

export default Navigation
