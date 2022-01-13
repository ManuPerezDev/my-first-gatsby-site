import React from 'react'
import Link from 'gatsby-link'

const TableOfContents = ({ tableOfContents }) => {
  console.log('Items', tableOfContents.items)
  console.log('Items flatted', tableOfContents.items.flat())
  return (
    <ul>
      {tableOfContents.items
        .map(headingOne => (
          <li key={headingOne.title}>
            <Link to={headingOne.url}>{headingOne.title}</Link>
            {headingOne.items !== undefined && headingOne.items.map(headingTwo => <li key={headingTwo.title}><Link to={headingTwo.url}>{headingTwo.title}</Link></li>)}
          </li>
        ))}
    </ul>)
}

export default TableOfContents
