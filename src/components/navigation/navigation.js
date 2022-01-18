import React from 'react'
import * as styles from './navigation.module.css'
import { Link } from 'gatsby'
import Switch from './switch-dark-mode/switch-dark-mode'
import { FaHamburger, FaWindowClose } from 'react-icons/fa'

const Navigation = () => (
  <nav>
    <div className={styles.navigationMobile}>
      <Switch/>
      <FaHamburger size={30} onClick={mobileMenu}/>
    </div>

    <div className={styles.navigationDesktop}>
       <Switch/>
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
       </ul>
    </div>

     <div id={'mobileNav'} className={styles.mobileMenu}>
        <ul className={styles.navLinksMobile}>
          <li onClick={mobileMenu} className={styles.navLinksItemMobile}>
            <FaWindowClose size={30} color={'white'}/>
          </li>
         <li className={styles.navLinksItemMobile}>
           <Link to='/'>
             <p>Home</p>
           </Link>
         </li>
         <li className={styles.navLinksItemMobile}>
           <Link to='/about'>
             <p>About</p>
           </Link>
         </li>
         <li className={styles.navLinksItemMobile}>
           <Link to='/blog'>
             <p>Blog</p>
           </Link>
         </li>
        </ul>
     </div>
  </nav>
)

export default Navigation

const mobileMenu = () => {
  const menu = document.getElementById('mobileNav')
  const isToggled = menu.style.display === 'block'
  const body = document.body

  if (isToggled) {
    menu.style.display = 'none'
    body.style.overflow = 'visible'
  } else {
    body.style.overflow = 'hidden'
    menu.style.display = 'block'
  }
}
