import React from 'react'
import MobileMenu from './mobile-menu/mobile-menu'
import NavigationDesktop from './navigation-desktop/navigation-desktop'
import NavigationMobile from './navigation-mobile/navigation-mobile'
import { Divider } from '@chakra-ui/react'

const Navigation = () => (
  <nav>
    <NavigationMobile/>
    <NavigationDesktop/>
    <MobileMenu/>
    <Divider/>
  </nav>
)

export default Navigation
