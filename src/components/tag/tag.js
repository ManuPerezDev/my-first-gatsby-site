import React from 'react'
import * as styles from './tag.module.css'

const Tag = ({ name }) => (
  <div className={styles.tagContainer}>
    {name}
  </div>
)

export default Tag
