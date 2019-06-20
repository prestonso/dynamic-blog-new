/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Typography from "typography"
import moragaTheme from "typography-theme-moraga"
import { Provider as GridProvider } from "griding"

//import * as S from "../components/styles.css"
import Navi from './navbar2.js'
import FooterInfo from './footer_info.js'
const typography = new Typography(moragaTheme)
typography.injectStyles()

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={data => (
       <GridProvider>
        <>
          <Navi></Navi>
          <section id="blog">{children}</section>

          {/* <S.Footer>
            See the original article:{" "}
            <a href="https://blog.significa.pt/advanced-blog-system-in-gatsby-16e0cd6b85ad" target="_blank" rel="noopener noreferrer">
              Advanced blog system in Gatsby
            </a>
            , by{" "}
            <a
              href="https://github.com/danilowoz"
              target="_blank"
              rel="noopener noreferrer"
            >
              @danilowoz
            </a>
          </S.Footer> */}
          <FooterInfo> </FooterInfo> 
        </>
       </GridProvider> 
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
