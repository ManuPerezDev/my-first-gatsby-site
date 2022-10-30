import * as React from 'react'
import Layout from '../../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import * as styles from './main-page.module.css'
import * as es from './es.json'
import { AnimatePresence, motion } from 'framer-motion'
import { Bio } from '../../components/bio/bio'

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 20 }
}

const AboutPage = () => {
  return (
    <Layout>
      <AnimatePresence exitBeforeEnter initial={true}>
        <motion.div
          key={es.description}
          initial='hidden'
          animate='enter'
          exit='exit'
          variants={variants}
          transition={{ duration: 1 }}
          style={{ position: 'relative' }}
        >
          <div className={styles.nameAvatarContainer}>
            <div>
              <h1>Manuel Pérez Regalado</h1>
              <h2>{es.dev}</h2>
            </div>
            <StaticImage src={'../images/avatar.png'} alt={'Avatar image'} className={styles.avatar}/>
          </div>
          <div className={styles.workContainer}>
            <h3 className={styles.sectionTitle}>{es.work}</h3>
            <p>{es.description}</p>
          </div>
          <Bio/>
        </motion.div>
      </AnimatePresence>
    </Layout>
  )
}

export default AboutPage
