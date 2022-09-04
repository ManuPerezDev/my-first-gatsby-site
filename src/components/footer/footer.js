import React from 'react'
import * as styles from './footer.module.css'

const Footer = () => (
  <footer>
    <div className={styles.copyright}>
      © {new Date().getFullYear()} Manuel Pérez Regalado
    </div>
  </footer>
)

export default Footer
