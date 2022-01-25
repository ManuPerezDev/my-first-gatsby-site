import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import * as styles from './article-preview.module.css'
import { Link } from 'gatsby'

const ArticlePreview = ({ posts }) => (
  <section className={styles.articlePreviewContainer}>
    {posts.map((post) => {
      return (
        <div>
          <Link to={`/blog/${post.slug}`}>
            <div className={styles.title}>{post.frontmatter.title}</div>
            <GatsbyImage
            image={getImage(post.frontmatter.hero_image)}
            alt={post.frontmatter.hero_image_alt}
          />
          <div className={styles.date}>{post.frontmatter.date}</div>
          </Link>
        </div>
      )
    })
    }
  </section>
)

export default ArticlePreview
