import * as React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import ArticlePreview from '../components/article-preview/article-preview'
import { Hero } from '../components/Hero/Hero'
import { Experience } from '../components/Experience/Experience'
import { Stack } from '../components/Stack/Stack'

const IndexPage = ({ data }) => {
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout>
      <Hero></Hero>
      <hr/>
      <Experience/>
      <hr/>
      <Stack/>
      <hr/>
      <ArticlePreview posts={posts}/>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`{
  allMarkdownRemark(sort: {frontmatter: {date: DESC}}, limit: 6) {
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
