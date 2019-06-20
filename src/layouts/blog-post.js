import React from "react"
import kebabCase from "lodash.kebabcase"
import { graphql, Link } from "gatsby"
import { Row, Cell } from "griding"

import * as S from "../components/styles.css"
import Layout from "../components/layout"
import Seo from "../components/seo"
import ConcatWords from "../utils/ConcatWords"
import formatDate from "../utils/formatDate"
import SocialShare from "../components/social_share.js"
import SideSection from "../components/side_section.js"
import '../components/social_style.css'
import SuggestedBlog from '../components/suggestedblog.js'
const BlogPost = ({ data, pageContext }) => {
  const { markdownRemark } = data
  const { prev, next } = pageContext
  const imageSource = markdownRemark.frontmatter.image.childImageSharp.fluid.src
  const desc = markdownRemark.frontmatter.description
  return (
    <Layout>
      <Seo title={markdownRemark.frontmatter.title} image={imageSource} description={desc}/>

      <div className="container" style={{paddingTop:"70px"}}>
      
        <div className ="row">
          <div class="col-sm-8" style={{paddingRight:"0px"}} id="blog-main-div">
            <img src={imageSource} alt={markdownRemark.frontmatter.title} />

            {/* <S.Author>
              By{" "}
              <Link
                to={`/blog/author/${kebabCase(markdownRemark.frontmatter.author)}`}
              >
                {markdownRemark.frontmatter.author}
              </Link>
            </S.Author> */}

            <S.Title>{markdownRemark.frontmatter.title}</S.Title>
            <S.DateText>{formatDate(markdownRemark.frontmatter.date)}</S.DateText>

            <S.Category>
              {markdownRemark.frontmatter.category.map((cat, index, arr) => (
                <ConcatWords arrCount={arr.length} index={index} key={cat}>
                  <Link to={`/blog/category/${kebabCase(cat)}`}>{cat}</Link>
                </ConcatWords>
              ))}
            </S.Category>

            <S.BlogContent
              dangerouslySetInnerHTML={{ __html: markdownRemark.html }}
            />

            {/* <Row>
              {prev && (
                <Cell xs={6}>
                  <Link to={prev.node.fields.slug}>
                    <S.NavigationPost>
                      <div>
                        {" "}
                        {"<"} {prev.node.frontmatter.title}
                      </div>
                    </S.NavigationPost>
                  </Link>
                </Cell>
              )}

              {next && (
                <Cell xs={6}>
                  <Link to={next.node.fields.slug}>
                    <S.NavigationPost>
                      <div>
                        {" "}
                        {next.node.frontmatter.title} {">"}
                      </div>
                    </S.NavigationPost>
                  </Link>
                </Cell>
              )}
              
            </Row> */}
            {/* <div className="row">
              <SocialShare></SocialShare>
            </div> */}
            {/* <div style={{paddingBottom: '30px'}}>
                    <h5 className="blog-subtitle" style={{borderBottom: '4px solid red'}}>Follow Us</h5>
                    <span className="social ">
                    <a target="_blank" href="https://www.facebook.com/FrugalTest/" className="fa fa-facebook fawidth">
                    </a>
                    </span>
                    <span className="social">
                    <a target="_blank" href="https://www.linkedin.com/company/frugaltesting/" className="fa fa-linkedin fawidth">
                    </a>
                    </span>
                    <span className="social">
                    <a target="_blank" href="https://twitter.com/FrugalTesting" className="fa fa-twitter fawidth">
                    </a>
                    </span>
                    <span className="social">
                    <a target="_blank" href="https://www.youtube.com/channel/UCjikgYGfeqU4ZPKQNm1V5tg" className="fa fa-youtube fawidth">
                    </a>
                    </span>
                </div>   */}
          </div>
          <SideSection></SideSection>
        </div>
        <div className="row"><h3>You might also like</h3></div>
        <div className="row">
              <SuggestedBlog />
            </div>
      </div>
    </Layout>
  )
}

export default BlogPost

export const query = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
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
`