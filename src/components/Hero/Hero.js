import React from 'react'
import * as styles from './Hero.module.css'
import { StaticImage } from 'gatsby-plugin-image'
import { Button } from 'flowbite-react'
import { FaLinkedin, FaGithubSquare, FaBusinessTime } from 'react-icons/fa'

export const Hero = () => {
  return (
    <section className={styles.heroContainer}>
      <div className={styles.hero}>
        <div className={styles.info}>
          <h2 className={styles.subtitle}>Software Developer</h2>
          <h1 className={styles.title}>Manuel Pérez Dev</h1>
          <div className={styles.buttons}>
            <a target={'_blank'} href={'https://www.linkedin.com/in/manuel-perez-regalado/'}>
              <Button outline gradientDuoTone='purpleToBlue'>
                <FaLinkedin fontSize='1.5em'/>
                <span className={styles.text}>Linkedin</span>
              </Button>
            </a>
            <a target={'_blank'} href={'https://github.com/ManuPerezDev/'}>
              <Button outline gradientDuoTone='greenToBlue'>
                <FaGithubSquare fontSize='1.5em'/>
                <span className={styles.text}>Github</span>
              </Button>
            </a>
            <a href={'#experience'}>
              <Button gradientDuoTone='tealToLime'>
                <FaBusinessTime fontSize='1.5em'/>
                <span className={styles.text}>+{new Date().getFullYear() - 2021} años de experiencia</span>
              </Button>
            </a>
          </div>
        </div>
        <div className={styles.image}>
          <StaticImage src={'../../../static/images/avatar.png'} alt={'Avatar image'}/>
        </div>
      </div>
    </section>
  )
}
