import React from "react"
import { graphql } from "gatsby"
import { Row, Cell } from "griding"

import { Container } from "../components/grid"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Pagination from "../components/pagination"
import Featured from "../components/featured"
import renderList from "../components/renderList"
import OnTop from "../components/ontop"

const BlogPostList = ({ data, pageContext }) => {
  const { allMarkdownRemark } = data
  const { currentPage, numPages } = pageContext

  return (
    <Layout>
      <OnTop />
      <Seo title="Blog" />
      {/* <Cell xs={12}>{currentPage === 1 && <Featured />}</Cell> */}

      {/* <Container> */}
      
      <div className="container blogger" style={{marginTop:"70px"}}>
        {/* <Row>{allMarkdownRemark.edges.map(renderList)}</Row> */}
        <div className="page page-active wow fadeInUp animated">
          <Featured />
          <div className="row" style={{padding:"20px 0px 0px 0px"}}>
          {allMarkdownRemark.edges.map(renderList)}
          </div>
        </div>
        <Pagination currentPage={currentPage} numPages={numPages} />
      </div>
      {/* </Container> */}
    </Layout>
  )
}


export default BlogPostList

export const query = graphql`
  query blogPostsList($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { featured: { eq: false } } }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date
            author
            category
            description
            image {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`
