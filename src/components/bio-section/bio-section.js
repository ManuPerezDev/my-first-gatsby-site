import React from 'react'
import Tag from '../tag/tag'
import * as styles from './bio-section.module.css'

const BioSection = ({ year, paragraph, tags }) => (
  <div className={styles.bioSection}>
    <span>{year}</span>
    <div>
      <p>
        {paragraph}
      </p>
      {tags && <div className={styles.tagContainer}>
        {tags.map(tag => <Tag name={tag}/>)}
      </div>
      }
    </div>
  </div>
)

export default BioSection
