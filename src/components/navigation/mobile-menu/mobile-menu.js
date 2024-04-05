import React from 'react'
import * as styles from './mobile-menu.module.css'
import { Link } from 'gatsby'
import { FaGithubSquare, FaLinkedin, FaWindowClose } from 'react-icons/fa'
import { mobileMenu, setScrollVisible } from './mobile-menu-handler'

const MobileMenu = () => (
  <div id={'mobileNav'} className={styles.mobileMenu}>
    <div className={styles.closeListContainer}>
      <div className={styles.closeButtonMobileContainer}>
        <FaWindowClose size={30} onClick={mobileMenu}/>
      </div>
      <ul className={styles.navLinksMobile}>
        <Link to='/' className={styles.navLinksItemMobile} onClick={setScrollVisible}>
          <li><p>Home</p></li>
        </Link>
        <li className={styles.navLinksMobile} onClick={setScrollVisible}>
          <Link href={'https://www.linkedin.com/in/manuel-perez-regalado/'}>
            <FaLinkedin fontSize='3em'/>
          </Link>
        </li>
        <li className={styles.navLinksMobile} onClick={setScrollVisible}>
          <Link href={'https://github.com/ManuPerezDev'}>
            <FaGithubSquare fontSize='3em'/>
          </Link>
        </li>
      </ul>
    </div>

  </div>
)

export default MobileMenu
