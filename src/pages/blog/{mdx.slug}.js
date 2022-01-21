import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import Layout from '../../components/layout'
import TableOfContents from './table-of-contents/table-of-contents'
import Seo from '../../components/seo/seo'
import ShareButtons from '../../components/share-buttons/share-buttons'

const BlogPost = ({ data, location }) => {
  const image = getImage(data.mdx.frontmatter.hero_image)
  const pageTitle = data.mdx.frontmatter.title
  const description = data.mdx.frontmatter.description
  const siteUrl = data.site.siteMetadata.siteUrl
  const imagePublicURL = data.mdx.frontmatter.hero_image.publicURL
  const date = data.mdx.frontmatter.date
  const heroImageAlt = data.mdx.frontmatter.hero_image_alt
  const tableOfContents = data.mdx.tableOfContents
  const body = data.mdx.body
  const url = location.href

  return (
    <Layout pageTitle={pageTitle}>
      <Seo
        title={pageTitle}
        description={description}
        image={`${siteUrl}${imagePublicURL}`}
        url={location.href}
      />
      <p>{date}</p>
      <GatsbyImage
        image={image}
        alt={heroImageAlt}
      />
      <ShareButtons title={pageTitle} url={url}/>
      <hr/>
      <TableOfContents tableOfContents={tableOfContents}/>
      <hr/>
      <MDXRenderer>
        {body}
      </MDXRenderer>
    </Layout>
  )
}

export const query = graphql`
  query($id: String) {
    site {
        siteMetadata {
          title
          siteUrl
        }
      }
    mdx(id: {eq: $id}) {
      body
      tableOfContents
      frontmatter {
        title
        description
        date(formatString: "MMMM DD, YYYY")
        hero_image_alt
        hero_image {
          publicURL
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`

export default BlogPost
