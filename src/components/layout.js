import * as React from 'react'
import * as styles from './layout.module.css'
import './global.css'
import Seo from './seo/seo'
import Navigation from './navigation/Navigation'
import Footer from './footer/footer'

const Layout = ({ children }) => {
  return (
    <div>
      <Seo/>
      <Navigation/>
      <div className={styles.container}>
        {children}
        <hr/>
        <Footer/>
      </div>
    </div>
  )
}

export default Layout
