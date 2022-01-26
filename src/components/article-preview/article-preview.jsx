import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import * as styles from './article-preview.module.css'
import { Link } from 'gatsby'
import { motion } from 'framer-motion'

const ArticlePreview = ({ posts }) => (
  <section className={styles.articlePreviewContainer}>
    {posts.map((post) => {
      return (
        <motion.div
          whileHover={{ scale: 1.2 }}
        >
          <Link to={`/blog/${post.slug}`}>
            <GatsbyImage
            image={getImage(post.frontmatter.hero_image)}
            alt={post.frontmatter.hero_image_alt}
            className={styles.image}
          />
          <div className={styles.title}>{post.frontmatter.title}</div>
          </Link>
        </motion.div>
      )
    })
    }
  </section>
)

export default ArticlePreview
