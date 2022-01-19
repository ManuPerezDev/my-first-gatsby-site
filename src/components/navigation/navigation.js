import React from 'react'
import * as styles from './navigation.module.css'
import { Link } from 'gatsby'
import Switch from './switch-dark-mode/switch-dark-mode'
import { FaHamburger } from 'react-icons/fa'

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

     <div id={'mobileNav'} className={styles.mobileMenu} onClick={mobileMenu}>
        <ul className={styles.navLinksMobile}>
           <Link to='/' className={styles.navLinksItemMobile}>
             <li >
                 <p>Home</p>
             </li>
           </Link>
           <Link to='/about' className={styles.navLinksItemMobile}>
             <li>
                 <p>About</p>
             </li>
           </Link>
           <Link to='/blog' className={styles.navLinksItemMobile}>
             <li>
                 <p>Blog</p>
             </li>
           </Link>
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
