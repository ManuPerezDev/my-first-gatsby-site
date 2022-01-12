import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import * as styles from './layout.module.css'
import './global.css'
import Switch from './switch-dark-mode/switch-dark-mode'

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className={styles.container}>
      <title>{pageTitle} | {data.site.siteMetadata.title}</title>
      <header>{data.site.siteMetadata.title}</header>
      <nav>
        <ul className={styles.navLinks}>
          <li className={styles.navLinksItem}>
            <Link to='/'>
              <p>Home</p>
          </Link>
          </li>
          <li className={styles.navLinksItem}>
            <Link to='/about'>
              <p>About</p>
          </Link>
          </li>
          <li className={styles.navLinksItem}>
            <Link to='/blog'>
              <p>Blog</p>
            </Link>
          </li>
          <li>
            <Switch/>
          </li>
        </ul>
      </nav>
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout
