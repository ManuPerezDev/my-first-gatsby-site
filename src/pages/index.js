import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import * as styles from './about/main-page.module.css'
import BioSection from '../components/bio-section/bio-section'
import { graphql } from 'gatsby'
import ArticlePreview from '../components/article-preview/article-preview'
import * as en from '../locales/en.json'
import * as es from '../locales/es.json'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 20 }
}

const AboutPage = ({ data }) => {
  const posts = data.allMdx.nodes

  return (
    <Layout>
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
          description
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
