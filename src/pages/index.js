import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import * as styles from './main-page.module.css'
import BioSection from '../components/bio-section/bio-section'
import { graphql } from 'gatsby'
import ArticlePreview from '../components/article-preview/article-preview'
import * as en from '../locales/en.json'
import * as es from '../locales/es.json'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const variants = {
  hidden: { opacity: 0, x: -20, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 20, y: 0 }
}

const AboutPage = ({ data }) => {
  const [messages, setMessages] = useState(es)
  const posts = data.allMdx.nodes

  return (
    <Layout>
      <div className={styles.languagesContainer}>
        <div onClick={() => setMessages(es)} className={styles.languageButton}>ES</div>
        <div onClick={() => setMessages(en)} className={styles.languageButton}>EN</div>
      </div>
      <AnimatePresence exitBeforeEnter initial={true}>
        <motion.div
          key={messages.description}
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
            <h2>{messages.dev}</h2>
            </div>
            <StaticImage src={'../images/avatar.png'} alt={'Avatar image'} className={styles.avatar}/>
          </div>
          <div className={styles.workContainer}>
          <h3 className={styles.sectionTitle}>{messages.work}</h3>
            <p>{messages.description}</p>
          </div>
          <h3 className={styles.sectionTitle}>Bio</h3>
          <BioSection year={'1992'} paragraph={messages.born}/>
          <BioSection
            year={'2020'}
            paragraph={messages.multiplatformCourse}
            tags={['Java', 'SQL', 'CSS3', 'HTML5', 'OOP', 'SOLID']}
          />
          <BioSection
            year={'2020'}
            paragraph={messages.bootCamp}
            tags={['NodeJS', 'JavaScript', 'CSS3', 'HTML5', 'VueJS', 'React', 'Jest', 'Testing Library', 'Go', 'SQL', 'GIT', 'Docker']}
          />
          <BioSection
            year={'2021'}
            paragraph={messages.firstLaboralExperience}/>
          <BioSection
            year={'2021'}
            paragraph={messages.firstCollaboration}
            tags={['NodeJS', 'TypeScript', 'MySQL', 'TDD', 'Jest', 'Docker', 'Hexagonal Architecture']}
          />
          <BioSection
            year={'2021'}
            paragraph={messages.secondCollaboration}
            tags={['GatsbyJS', 'React', 'CSS3']}
          />
          <BioSection
            year={'2022'}
            paragraph={messages.thirdCollaboration}
            tags={['NodeJS', 'TypeScript', 'Docker', 'AWS', 'TDD', 'DDD']}
          />
        </motion.div>
      </AnimatePresence>
      <ArticlePreview posts={posts}/>
    </Layout>
  )
}

export default AboutPage

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}, limit: 4) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          hero_image_alt
          hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
        }
        id
        slug
      }
    }
  }
`
