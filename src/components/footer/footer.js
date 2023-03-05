import React from 'react'
import * as styles from './footer.module.css'
import { Divider } from '@chakra-ui/react'

const Footer = () => (
  <footer>
    <Divider/>
    <div className={styles.copyright}>
      © {new Date().getFullYear()} Manuel Pérez Regalado
    </div>
  </footer>
)

export default Footer
