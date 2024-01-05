import * as React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import ArticlePreview from '../components/article-preview/article-preview'

const IndexPage = ({ data }) => {
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout>
      <ArticlePreview posts={posts}/>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`{
  allMarkdownRemark(sort: {frontmatter: {date: DESC}}, limit: 5) {
    nodes {
      frontmatter {
        date(formatString: "MMMM D, YYYY")
        title
        hero_image_alt
        description
        slug
        hero_image {
          childImageSharp {
            gatsbyImageData(width: 376 height: 160)
          }
        }
      }
      id
    }
  }
}`
