import * as React from 'react'
import * as styles from './post-body.module.css'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../../components/layout'
import Seo from '../../components/seo/seo'
import ShareButtons from '../../components/share-buttons/share-buttons'

const BlogPost = ({ data, children, location }) => {
  const image = getImage(data.mdx.frontmatter.hero_image)
  const pageTitle = data.mdx.frontmatter.title
  const description = data.mdx.frontmatter.description
  const siteUrl = data.site.siteMetadata.siteUrl
  const imagePublicURL = data.mdx.frontmatter.hero_image.publicURL
  const date = data.mdx.frontmatter.date
  const heroImageAlt = data.mdx.frontmatter.hero_image_alt
  const heroImageOwnerUrl = data.mdx.frontmatter.hero_image_owner_url
  const url = location.href

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
        />
      </a>
      <div className={styles.infoContainer}>
        <h1>{pageTitle}</h1>
        <div>
          <div className={styles.date}>{date}</div>
          <ShareButtons title={pageTitle} url={url}/>
        </div>
      </div>

      <div className={styles.postBody}>
        {children}
      </div>
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