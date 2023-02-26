import * as React from 'react'
import * as styles from './layout.module.css'
import './global.css'
import Seo from './seo/seo'
import Navigation from './navigation/navigation'
import Footer from './footer/footer'

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Seo/>
      <Navigation/>
      <hr/>
      {children}
      <hr/>
      <Footer/>
    </div>
  )
}

export default Layout
