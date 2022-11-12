import React, { useState } from 'react'
import Tag from '../tag/tag'
import * as styles from './bio-section.module.css'
import { AiFillCaretRight, AiFillCaretDown } from 'react-icons/ai'

const BioSection = ({ year, paragraph, tags, collaborations }) => {
  const [displayCollaborations, setDisplayCollaborations] = useState(false)

  const handleDisplayCollaborations = () => {
    setDisplayCollaborations(!displayCollaborations)
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
        {collaborations && (displayCollaborations ? <AiFillCaretDown style={{ width: '2em' }}/> : <AiFillCaretRight style={{ width: '2em' }}/>)}
      </div>
      {collaborations && <div className={styles.collaborationsWrapper} style={{ display: displayCollaborations ? 'inline-block' : 'none' }}>
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
