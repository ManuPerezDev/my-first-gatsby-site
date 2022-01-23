import * as React from 'react'
import Layout from '../../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import * as styles from './about.module.css'
import BioSection from '../../components/bio-section/bio-section'

const AboutPage = () => {
  return (
    <Layout pageTitle='Sobre mí'>
      <div className={styles.nameAvatarContainer}>
        <div>
        <h2>Manuel Pérez Regalado</h2>
        <h3>Desarrollador de Software</h3>
        </div>
        <StaticImage src={'../../images/avatar.png'} alt={'Avatar image'} className={styles.avatar}/>
      </div>
      <BioSection year={'1992'} paragraph={'Nacido en La Palma (Canarias).'}/>
      <BioSection year={'2020'} paragraph={'Finalización de ciclo superior de Desarrollo de Aplicaciones Multiplataforma.'} tags={['Java', 'SQL', 'CSS3', 'HTML5', 'OOP', 'SOLID']}/>
      <BioSection year={'2020'} paragraph={'Curso Bootcamp Full Stack Developer EOI.'} tags={['NodeJS', 'JavaScript', 'CSS3', 'HTML5', 'VueJS', 'React', 'Jest', 'Testing Library', 'Go', 'SQL', 'GIT', 'Docker']}/>
      <BioSection year={'2021'} paragraph={'Primera experiencia laboral como desarrollador de software en Lean Mind como desarrollador junior.'}/>
      <BioSection year={'2021'} paragraph={'8 meses como colaborador en empresa comercializadora de luz como desarrollador backend.'} tags={['NodeJS', 'TypeScript', 'MySQL', 'TDD', 'Jest', 'Docker', 'Hexagonal Architecture']}/>
      <BioSection year={'2021'} paragraph={'2 meses como colaborador desarrollando jamstack blog como desarrollador frontend.'} tags={['GatsbyJS', 'React', 'CSS3']}/>
      <BioSection year={'2022'} paragraph={'Actualmente colaborando como desarrollador full stack en empresa relacionada con el análisis de audiencias en redes sociales.'}/>
    </Layout>
  )
}

export default AboutPage
