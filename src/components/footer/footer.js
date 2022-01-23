import React from 'react'
import * as styles from './footer.module.css'
import { FaLinkedin, FaGithubSquare } from 'react-icons/fa'

const Footer = () => (
  <footer>
    <a href={'https://www.linkedin.com/in/manuel-perez-regalado/'} >
      <FaLinkedin fontSize='1.5em'/>
    </a>
    <a href={'https://github.com/Pandacore'} >
      <FaGithubSquare fontSize='1.5em'/>
    </a>
  </footer>
)

export default Footer
