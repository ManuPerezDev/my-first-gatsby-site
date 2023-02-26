import * as React from 'react'
import Layout from '../../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import * as styles from './main-page.module.css'
import { Bio } from '../../components/bio/bio'

const AboutPage = () => {
  const description = 'Soy desarrollador de software desde 2021 y amo todo lo que tiene que ver con el uso de buenas prácticas desarrollando. Me encanta aprender algo nuevo cada día y seguir evolucionando como profesional. Principalmente he colaborado en proyectos backend usando NodeJS y TypeScript.'
  return (
    <Layout>
      <div className={styles.nameAvatarContainer}>
        <div>
          <h1>Manuel Pérez Regalado</h1>
          <h2>{'Desarrollador de Software'}</h2>
        </div>
        <StaticImage src={'../../../static/images/avatar.png'} alt={'Avatar image'} className={styles.avatar}/>
      </div>
      <div className={styles.workContainer}>
        <h3 className={styles.sectionTitle}>{'Trabajo'}</h3>
        <p>{description}</p>
      </div>
      <Bio/>
    </Layout>
  )
}

export default AboutPage
