import React from 'react'
import Link from 'gatsby-link'
import * as styles from './table-of-contents.module.css'

const TableOfContents = ({ tableOfContents }) => {
  return (
    <>
    {tableOfContents && <ol className={styles.toc}>
      {tableOfContents.items
        .map(headingOne => (
          <li key={headingOne.title}>
            <Link to={headingOne.url}>{headingOne.title}</Link>
            {headingOne.items !== undefined && headingOne.items.map(headingTwo => <li key={headingTwo.title}><Link
              to={headingTwo.url}>{headingTwo.title}</Link></li>)}
          </li>
        ))}
    </ol>}
    </>
  )
}

export default TableOfContents
