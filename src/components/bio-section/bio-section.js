import React, { useState } from 'react'
import Tag from '../tag/tag'
import * as styles from './bio-section.module.css'

const BioSection = ({ year, paragraph, tags, collaborations }) => {
  const [displayCollaborations, setdisplayCollaborations] = useState('none')

  const handleDisplayCollaborations = () => {
    setdisplayCollaborations(displayCollaborations === 'none' ? 'inline-block' : 'none')
  }

  return (
    <div onClick={handleDisplayCollaborations} className={styles.bioSectionWrapper}>
      <div className={styles.bioSection}>
        <span>{year}</span>
        <div>
          <p>
            {paragraph}
          </p>
          {tags.length > 0 && <div className={styles.tagContainer}>
            {tags.map(tag => <Tag name={tag}/>)}
          </div>
          }
        </div>
      </div>
      {collaborations && <div className={styles.collaborationsWrapper} style={{ display: displayCollaborations }}>
        {<div className={styles.collaborations}>{collaborations.map(collaboration => <Collaboration
          description={collaboration.description} tags={collaboration.tools}/>)}</div>}
      </div>}
    </div>
  )
}

const Collaboration = ({ description, tags }) => {
  return (
    <div className={styles.bioSection}>
      <div>
        <p>
          {description}
        </p>
        {tags && <div className={styles.tagContainer}>
          {tags.map(tag => <Tag name={tag}/>)}
        </div>
        }
      </div>
    </div>
  )
}

export default BioSection
