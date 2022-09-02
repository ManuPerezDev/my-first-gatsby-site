import * as React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import ArticlePreview from '../components/article-preview/article-preview'

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
