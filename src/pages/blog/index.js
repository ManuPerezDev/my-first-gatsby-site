import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import ArticlePreview from '../../components/article-preview/article-preview'

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle='Latest Posts'>
      <ArticlePreview posts={data.allMdx.nodes}/>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
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

export default BlogPage
