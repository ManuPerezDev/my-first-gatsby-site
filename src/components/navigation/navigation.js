import React from 'react'
import MobileMenu from './mobile-menu/mobile-menu'
import NavigationDesktop from './navigation-desktop/navigation-desktop'
import NavigationMobile from './navigation-mobile/navigation-mobile'

const Navigation = () => (
  <nav>
    <NavigationMobile/>
    <NavigationDesktop/>
    <MobileMenu/>
  </nav>
)

export default Navigation
