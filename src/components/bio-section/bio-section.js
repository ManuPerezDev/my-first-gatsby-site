import React, { useState } from 'react'
import MyTag from '../tag/myTag'
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
        <Information description={paragraph} tags={tags}/>
        {collaborations && (displayCollaborations ? <AiFillCaretDown style={{ width: '2em' }}/> : <AiFillCaretRight style={{ width: '2em' }}/>)}
      </div>
      {collaborations && <div className={styles.collaborationsWrapper} style={{ height: displayCollaborations ? `${collaborations.length * 150}px` : '0px' }}>
        {<div className={styles.collaborations}>{collaborations.map(collaboration => <Information
          description={collaboration.description} tags={collaboration.tools}/>)}</div>}
      </div>}
    </div>
  )
}

const Information = ({ description, tags }) => {
  return (
    <div>
      <p>
        {description}
      </p>
      {tags.length > 0 && <div className={styles.tagContainer}>
      {tags.map(tag => <MyTag text={tag}/>)}
      </div>
      }
    </div>
  )
}

export default BioSection
