/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */



/* This section decides what will be the basic template for all pages
 * blog-list,blog-post,blog-author,blog-category, All pages have this layout  */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Typography from "typography"
import moragaTheme from "typography-theme-moraga"
import { Provider as GridProvider } from "griding"
import Helmet from "react-helmet"
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
          <Helmet>
            <link rel="shortcut icon" href="https://www.frugaltesting.com/resources/images/logo.png" alt="FrugalLogo" title="FrugalLogo"></link>
          </Helmet>
            <Navi></Navi>
            <section id="blog">{children}</section>
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
