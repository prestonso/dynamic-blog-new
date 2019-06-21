import React from "react"
import kebabCase from "lodash.kebabcase"
import { graphql, Link, useStaticQuery } from "gatsby"
import { Row, Cell } from "griding"

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
          <Link to={markdownRemark.fields.slug}>
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
          {/* <div className="col-xs-12">
            <h5>Search Inside Our Blogs</h5>
          </div> */}
          <div className="col-lg-12" style={{padding: '5px'}}>
            <div id="___gcse_0"><div className="gsc-control-searchbox-only gsc-control-searchbox-only-en" dir="ltr"><form className="gsc-search-box gsc-search-box-tools" acceptCharset="utf-8"><table cellSpacing={0} cellPadding={0} className="gsc-search-box"><tbody><tr><td className="gsc-input"><div className="gsc-input-box" id="gsc-iw-id1"><table cellSpacing={0} cellPadding={0} id="gs_id50" className="gstl_50 gsc-input" style={{width: '100%', padding: '0px'}}><tbody><tr><td id="gs_tti50" className="gsib_a"><input autoComplete="off" type="text" size={10} className="gsc-input" name="search" title="search" id="gsc-i-id1" placeholder="Custom Search" style={{width: '100%', padding: '0px', border: 'none', margin: '0px', height: 'auto', background: 'url("https://www.google.com/cse/static/images/1x/googlelogo_lightgrey_46x16dp.png") left center no-repeat rgb(255, 255, 255)', textIndent: '48px', outline: 'none'}} dir="ltr" spellCheck="false" /></td><td className="gsib_b"><div className="gsst_b" id="gs_st50" dir="ltr"><a className="gsst_a" href="javascript:void(0)" style={{display: 'none'}} title="Clear search box" role="button"><span className="gscb_a" id="gs_cb50" aria-hidden="true">×</span></a></div></td></tr></tbody></table></div></td><td className="gsc-search-button"><button className="gsc-search-button gsc-search-button-v2"><svg width={13} height={13} viewBox="0 0 13 13"><title>search</title><path d="m4.8495 7.8226c0.82666 0 1.5262-0.29146 2.0985-0.87438 0.57232-0.58292 0.86378-1.2877 0.87438-2.1144 0.010599-0.82666-0.28086-1.5262-0.87438-2.0985-0.59352-0.57232-1.293-0.86378-2.0985-0.87438-0.8055-0.010599-1.5103 0.28086-2.1144 0.87438-0.60414 0.59352-0.8956 1.293-0.87438 2.0985 0.021197 0.8055 0.31266 1.5103 0.87438 2.1144 0.56172 0.60414 1.2665 0.8956 2.1144 0.87438zm4.4695 0.2115 3.681 3.6819-1.259 1.284-3.6817-3.7 0.0019784-0.69479-0.090043-0.098846c-0.87973 0.76087-1.92 1.1413-3.1207 1.1413-1.3553 0-2.5025-0.46363-3.4417-1.3909s-1.4088-2.0686-1.4088-3.4239c0-1.3553 0.4696-2.4966 1.4088-3.4239 0.9392-0.92727 2.0864-1.3969 3.4417-1.4088 1.3553-0.011889 2.4906 0.45771 3.406 1.4088 0.9154 0.95107 1.379 2.0924 1.3909 3.4239 0 1.2126-0.38043 2.2588-1.1413 3.1385l0.098834 0.090049z" /></svg></button></td><td className="gsc-clear-button"><div className="gsc-clear-button" title="clear results">&nbsp;</div></td></tr></tbody></table></form></div></div></div>
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
          {/* <div className="stick-bottom">
            <a href="/login"><h3 style={{color: 'white'}}>Start Your <span style={{fontSize: '36px', color: 'gold'}}> Free </span> Load Test Now</h3></a>
          </div> */}
        </div>
      </article>
    </div>
  </div>
</div>

  )
}

export default BlogFeatured

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
