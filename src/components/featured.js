import React from "react"
import kebabCase from "lodash.kebabcase"
import { graphql, Link, useStaticQuery } from "gatsby"
import { Row, Cell } from "griding"

import Helmet from "react-helmet"
import * as S from "../components/styles.css"
import ConcatWords from "../utils/ConcatWords"
import formatDate from "../utils/formatDate"

import 'font-awesome/css/font-awesome.css'
import './social_style.css'
// const BlogFeatured = () => {
//   const { markdownRemark } = useStaticQuery(query)
//   const imageSource = markdownRemark.frontmatter.image.childImageSharp.fluid.src

//   return (
//     <Row>
//       <Cell md={6}>
//         <S.FeaturedImage>
//           <Link to={markdownRemark.fields.slug}>
//             <img src={imageSource} alt={markdownRemark.frontmatter.title} />
//           </Link>
//         </S.FeaturedImage>
//       </Cell>

//       <Cell md={6}>
//         <Row>
//           <S.FeaturedInfos>
//             <S.Author>
//               By{" "}
//               <Link
//                 to={`/blog/author/${kebabCase(
//                   markdownRemark.frontmatter.author
//                 )}`}
//               >
//                 {markdownRemark.frontmatter.author}
//               </Link>
//             </S.Author>

//             <Link to={markdownRemark.fields.slug}>
//               <S.Title>{markdownRemark.frontmatter.title}</S.Title>
//             </Link>

//             <S.DateText>
//               {formatDate(markdownRemark.frontmatter.date)}
//             </S.DateText>

//             <S.Category>
//               {markdownRemark.frontmatter.category.map((cat, index, arr) => (
//                 <ConcatWords arrCount={arr.length} index={index} key={cat}>
//                   <Link to={`/blog/category/${kebabCase(cat)}`}>{cat}</Link>
//                 </ConcatWords>
//               ))}
//             </S.Category>
//           </S.FeaturedInfos>
//         </Row>
//       </Cell>
//     </Row>
//   )
// }
/* Blog featured starts here */
const BlogFeatured = () => {
  const { markdownRemark } = useStaticQuery(query)
  const imageSource = markdownRemark.frontmatter.image.childImageSharp.fluid.src

  return (
    <div className="row">
      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 top-left-div3">
        <div className="blog-post blog-large wow fadeInUp blog-left-height2 animated" style={{boxShadow: 'rgba(0, 0, 0, 0.29) 0px 0px 10px', visibility: 'visible', animationName: 'fadeInUp'}}>
          <article>
            <header className="entry-header">
              <div className="entry-thumbnail" style={{paddingBottom: '20px'}}>
                <Link to={markdownRemark.fields.slug}>   {/*link to the blog page*/}
                <img src={imageSource} alt={markdownRemark.frontmatter.title} style={{width:"100%",height:"100%"}} />
              </Link>
            </div>
            <div className="entry-date">{formatDate(markdownRemark.frontmatter.date)}</div>
            <h3 className="entry-title">
              <Link to={markdownRemark.fields.slug}>
                {markdownRemark.frontmatter.title}
              </Link>
            </h3>
          </header>
          <div className="entry-content" style={{    overflow: "hidden",textOverflow:"ellipsis",maxHeight: "70px"}}>
            <p>
              {markdownRemark.frontmatter.description}
            </p>
          </div>
          <footer className="entry-meta">
            {markdownRemark.frontmatter.category.map((cat, index, arr) => (
              <ConcatWords arrCount={arr.length} index={index} key={cat}>
                <Link to={`/blog/category/${kebabCase(cat)}`}>{cat}</Link>
              </ConcatWords>
            ))}
          </footer>
        </article>
      </div>
    </div>
    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 top-right-div3">
      <div className="blog-post blog-large blog-right-height2 wow fadeInRight animated" data-wow-duration="1000ms" data-wow-delay="0ms" style={{border: 'none', boxShadow: 'rgba(0, 0, 0, 0.29) 0px 0px 10px', visibility: 'visible', animationDuration: '1000ms', animationDelay: '0ms', animationName: 'fadeInRight'}}>
        <article>
          <div className="row search-div">
            <div className="col-lg-12" style={{padding: '5px'}}>

              {/* The google custom search */}
              <form method = "get" title = "Search Form" action="https://cse.google.com/cse/publicurl">
                <div>
                  <input type="text" id="q" name="q" title="Search this site" alt="Search Text" maxlength="256" />
                  <input type="hidden" id="cx" name="cx" value="007912272345005004811:q6lxkm2fyma" />
                  <input type="image" id="searchSubmit" name="submit" src="https://image.flaticon.com/icons/svg/70/70376.svg" alt="Go" title="Submit Search Query" style={{height:"1.8em",paddingLeft:"5px",paddingTop:"10px"}}/>
                </div>
              </form>
              {/* Google custom search ends here */}
            </div>
            <div className="login-banner"><a href=""><center><h3 className="login-banner-text">Start your <span style={{fontSize:"36px", color:"gold",}}>FREE</span> load test now!</h3></center></a></div>
            <div className="col-lg-12" style={{}}>
              <p style={{paddingTop:"20px"}}><b>Follow Us</b></p>
            </div>
            <div className="col-xs-12" id="socialList">
              <span className="social"><a target="_blank" className="fa fa-facebook fawidth" href="https://www.facebook.com/FrugalTest/" /></span>
              <span className="social"><a target="_blank" className="fa fa-twitter fawidth" href="https://twitter.com/FrugalTesting" /></span>
              <span className="social"><a target="_blank" className="fa fa-linkedin fawidth" href="https://www.linkedin.com/company/frugaltesting/" /></span>
              <span className="social"><a target="_blank" className="fa fa-youtube fawidth" href="https://www.youtube.com/channel/UCjikgYGfeqU4ZPKQNm1V5tg"/></span>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>

  )
}
/* Blog featured ends here */
export default BlogFeatured

// used for querying the md files
const query = graphql`
  query BlogFeatured {
    markdownRemark(frontmatter: { featured: { eq: true } }) {
      html
      fields {
        slug
      }
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
