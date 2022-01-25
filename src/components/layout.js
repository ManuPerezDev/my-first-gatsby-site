import * as React from 'react'
import * as styles from './layout.module.css'
import './global.css'
import Seo from './seo/seo'
import Navigation from './navigation/navigation'
import Footer from './footer/footer'
import { motion } from 'framer-motion'

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 20 }
}

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Seo/>
      <Navigation/>
      <hr/>
      <motion.main
        initial='hidden'
        animate='enter'
        exit='exit'
        variants={variants}
        transition={{ type: 'linear' }}
        style={{ position: 'relative' }}
      >
      {children}
      </motion.main>
      <hr/>
      <Footer/>
    </div>
  )
}

export default Layout
