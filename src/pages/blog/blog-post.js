import * as React from 'react'
import * as styles from './post-body.module.css'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../../components/layout'
import Seo from '../../components/seo/seo'

const BlogPost = ({ data, location }) => {
  const image = getImage(data.markdownRemark.frontmatter.hero_image)
  const pageTitle = data.markdownRemark.frontmatter.title
  const description = data.markdownRemark.frontmatter.description
  const siteUrl = data.site.siteMetadata.siteUrl
  const imagePublicURL = data.markdownRemark.frontmatter.hero_image.publicURL
  const date = data.markdownRemark.frontmatter.date
  const heroImageAlt = data.markdownRemark.frontmatter.hero_image_alt
  const heroImageOwnerUrl = data.markdownRemark.frontmatter.hero_image_owner_url
  const url = location.href
  const post = data.markdownRemark.html

  const heroImgLink = heroImageOwnerUrl || url

  return (
    <Layout>
      <Seo
        title={pageTitle}
        description={description}
        image={`${siteUrl}${imagePublicURL}`}
        url={location.href}
        date={date}
      />
      <a href={heroImgLink}>
        <GatsbyImage
          image={image}
          alt={heroImageAlt}
          style={{ marginTop: '1rem' }}
        />
      </a>
      <div className={styles.infoContainer}>
        <h1>{pageTitle}</h1>
        <div>{date}</div>
      </div>
      <div className={styles.postBody} dangerouslySetInnerHTML={{ __html: post }}/>
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
    markdownRemark(id: {eq: $id}) {
      html
      tableOfContents
      frontmatter {
        title
        description
        date(formatString: "MMMM DD, YYYY")
        hero_image_alt
        hero_image_owner_url
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
