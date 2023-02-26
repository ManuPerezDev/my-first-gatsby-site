import * as React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import ArticlePreview from '../components/article-preview/article-preview'

const IndexPage = ({ data }) => {
  const posts = data.allMdx.nodes

  return (
    <Layout>
      <ArticlePreview posts={posts}/>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`{
  allMdx(sort: {frontmatter: {date: DESC}}, limit: 4) {
    nodes {
      frontmatter {
        date(formatString: "MMMM D, YYYY")
        title
        hero_image_alt
        description
        slug
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      id
    }
  }
}`
