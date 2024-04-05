import React from 'react'
import * as styles from './Hero.module.css'
import { StaticImage } from 'gatsby-plugin-image'
import { Button } from 'flowbite-react'
import { FaLinkedin, FaGithubSquare } from 'react-icons/fa'

export const Hero = () => {
  return (
    <section className={styles.heroContainer}>
      <div className={styles.hero}>
        <div className={styles.info}>
          <h2 className={styles.title}>Software Developer</h2>
          <h3 className={styles.subtitle}>Manuel Pérez Dev</h3>
          <div className={styles.buttons}>
            <a target={'_blank'} href={'https://www.linkedin.com/in/manuel-perez-regalado/'}>
              <Button outline gradientDuoTone='purpleToBlue'>
                <FaLinkedin className='mr-2 h-5 w-5' fontSize='1.5em'/>
                Linkedin
              </Button>
            </a>
            <a target={'_blank'} href={'https://github.com/ManuPerezDev/'}>
              <Button outline gradientDuoTone='greenToBlue'>
                <FaGithubSquare className='mr-2 h-5 w-5' fontSize='1.5em'/>
                Github
              </Button>
            </a>
          </div>
        </div>
        <div className={styles.image}>
          <StaticImage src={'../../../static/images/avatar.png'} alt={'Avatar image'}/>
        </div>
      </div>
      <div className='absolute hidden md:flex bottom-4 w-full justify-center'>
        <a
          href='#articles'
          className='md:flex gap-2 animate-bounce text-primary-500 dark:text-primary-400 font-bold'
        >
          Artículos{' '}
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
            className='w-5 h-5'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75'
            />
          </svg>
        </a>
      </div>
    </section>
  )
}
