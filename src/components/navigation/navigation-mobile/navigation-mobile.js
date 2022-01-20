import React from 'react'
import * as styles from './navigation-mobile.module.css'
import { GiHamburgerMenu } from 'react-icons/gi'
import Switch from '../switch-dark-mode/switch-dark-mode'
import { mobileMenu } from '../mobile-menu/mobile-menu-handler'

const NavigationMobile = () => (
  <div className={styles.navigationMobile}>
    <Switch/>
    <GiHamburgerMenu size={30} onClick={mobileMenu}/>
  </div>
)

export default NavigationMobile
