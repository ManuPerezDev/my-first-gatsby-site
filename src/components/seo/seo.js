import * as React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const Seo = ({ description = '', lang = 'en', meta = [], title, image, url, date }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title

  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={title}
      defaultTitle={defaultTitle}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : undefined}
      meta={[
        {
          name: 'description',
          content: metaDescription
        },
        {
          name: 'author',
          content: site.siteMetadata.author
        },
        {
          name: 'image',
          content: image
        },
        {
          property: 'article:published_time',
          content: date
        },
        {
          property: 'og:title',
          content: title
        },
        {
          property: 'og:description',
          content: metaDescription
        },
        {
          property: 'og:type',
          content: 'website'
        },
        {
          property: 'og:site_name',
          content: 'MANUEL-DEV'
        },
        {
          property: 'og:url',
          content: url
        },
        {
          property: 'og:image',
          content: image
        },
        {
          property: 'twitter:card',
          content: 'summary_large_image'
        },
        {
          property: 'twitter:url',
          content: url
        },
        {
          property: 'twitter:title',
          content: title
        },
        {
          property: 'twitter:description',
          content: description
        },
        {
          property: 'twitter:image',
          content: image
        }
      ].concat(meta)}
    />
  )
}

export default Seo
