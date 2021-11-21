import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import {Container, Heading, NavLinks, NavLinksItem, NavLinkText, SiteTitle} from "./layout.style";

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
    <Container>
      <title>{pageTitle} | {data.site.siteMetadata.title}</title>
      <SiteTitle>{data.site.siteMetadata.title}</SiteTitle>
      <nav>
        <NavLinks>
          <NavLinksItem>
            <Link to="/">
              <NavLinkText>
                <p>Home</p>
              </NavLinkText>
          </Link>
          </NavLinksItem>
          <NavLinksItem>
            <Link to="/about">
              <NavLinkText>
                <p>About</p>
              </NavLinkText>
          </Link>
          </NavLinksItem>
          <NavLinksItem>
            <Link to="/blog">
              <NavLinkText>
                <p>Blog</p>
              </NavLinkText>
            </Link>
          </NavLinksItem>
        </NavLinks>
      </nav>
      <main>
        <Heading>{pageTitle}</Heading>
        {children}
      </main>
    </Container>
  )
}

export default Layout
