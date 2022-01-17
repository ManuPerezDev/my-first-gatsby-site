import React from 'react'
import * as styles from './navigation.module.css'
import { Link } from 'gatsby'
import Switch from './switch-dark-mode/switch-dark-mode'
import { FaHamburger, FaWindowClose } from 'react-icons/fa'

const Navigation = () => (
  <nav>
    <div className={styles.navigationMobile} onClick={mobileMenu}>
      <FaHamburger size={30}/>
    </div>

    <div className={styles.navigationDesktop}>
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
       <button onClick={mobileMenu}>

       </button>
    </div>

     <div id={'mobileNav'} className={styles.mobile}>
        <ul className={styles.navLinks}>
          <li onClick={mobileMenu} className={styles.navLinksItem}>
            <FaWindowClose size={30}/>
          </li>
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
