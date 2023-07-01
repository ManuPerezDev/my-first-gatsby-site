import * as React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import ArticlePreview from '../components/article-preview/article-preview'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = ({ data }) => {
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout>
      <StaticImage src={'../../static/images/pandas.jpeg'} alt={'A group of pandas.'}/>
      <ArticlePreview posts={posts}/>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`{
  allMarkdownRemark(sort: {frontmatter: {date: DESC}}, limit: 4) {
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
