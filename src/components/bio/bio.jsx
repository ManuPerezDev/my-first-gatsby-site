import BioSection from '../bio-section/bio-section'
import * as React from 'react'
import * as styles from './bio.module.css'
import * as biography from './bio.json'

export const Bio = () => {
  return (
    <>
      <div className={styles.sectionTitleContainer}>
        <h3 className={styles.sectionTitle}>Bio</h3>
      </div>
      {biography.map(element => <BioSection year={element.year} paragraph={element.description} tags={element.tools} collaborations={element.collaborations}/>)}
    </>
  )
}
