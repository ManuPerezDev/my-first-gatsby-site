import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import * as styles from './article-preview.module.css'
import { Link } from 'gatsby'

const ArticlePreview = ({ posts }) => {
  return (
    <section className={styles.articlePreviewContainer}>
      {posts.map((post) => {
        return (
          <Link to={`/blog/${post.slug}`}>
            <div className={styles.postInfoContainer}>
              <div className={styles.postInfo}>
                <GatsbyImage
                  image={getImage(post.frontmatter.hero_image)}
                  alt={post.frontmatter.hero_image_alt}
                  className={styles.image}
                />
                <div className={styles.titleDescriptionContainer}>
                  <div className={styles.title}>{post.frontmatter.title}</div>
                  <div className={styles.description}>
                    {cutDescription(post.frontmatter.description)}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        )
      })
      }
    </section>
  )
}

function cutDescription(description) {
  const maxLength = 120
  const trimmedString = description.substr(0, maxLength)

  return trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(' '))).concat('...')
}

export default ArticlePreview
