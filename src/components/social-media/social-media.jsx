import React from 'react'
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa'
import * as styles from './social-media.module.css'

const SocialMedia = () => (
  <div className={styles.socialMedia}>
    <a href={'https://www.linkedin.com/in/manuel-perez-regalado/'} >
      <FaLinkedin fontSize='1.5em'/>
    </a>
    <a href={'https://github.com/ManuPerezDev'} >
      <FaGithubSquare fontSize='1.5em'/>
    </a>
  </div>
)

export default SocialMedia
