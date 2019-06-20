// import React from "react"
// import kebabCase from "lodash.kebabcase"
// import { Link } from "gatsby"
// import { Row, Cell } from "griding"

// import * as S from "../components/styles.css"
// import ConcatWords from "../utils/ConcatWords"
// import formatDate from "../utils/formatDate"

// const renderList = ({ node }) => {
//   const imageSource = node.frontmatter.image.childImageSharp.fluid.src

//   return (
//     <Cell xs={12} key={node.fields.slug}>
//       <S.Article>
//         <Row>
//           <Cell xs={3}>
//             <S.Image>
//               <Link to={node.fields.slug}>
//                 <img src={imageSource} alt={node.frontmatter.title} />
//               </Link>
//             </S.Image>
//           </Cell>

//           <Cell xs={9}>
//             <S.Author>
//               By{" "}
//               <Link to={`/blog/author/${kebabCase(node.frontmatter.author)}`}>
//                 {node.frontmatter.author}
//               </Link>
//             </S.Author>

//             <Link to={node.fields.slug}>
//               <S.Title>{node.frontmatter.title}</S.Title>
//             </Link>

//             <S.DateText>{formatDate(node.frontmatter.date)}</S.DateText>

//             <S.Category>
//               {node.frontmatter.category.map((cat, index, arr) => (
//                 <ConcatWords arrCount={arr.length} index={index} key={cat}>
//                   <Link to={`/blog/category/${kebabCase(cat)}`}>{cat}</Link>
//                 </ConcatWords>
//               ))}
//             </S.Category>
//           </Cell>
//         </Row>
//       </S.Article>
//     </Cell>
//   )
// }

// export default renderList

import React from "react"
import kebabCase from "lodash.kebabcase"
import { Link } from "gatsby"
import { Row, Cell } from "griding"

import * as S from "../components/styles.css"
import ConcatWords from "../utils/ConcatWords"
import formatDate from "../utils/formatDate"
const renderList = ({ node }) => {
    const imageSource = node.frontmatter.image.childImageSharp.fluid.src
        return (
            <div className="col-md-4 col-sm-6">
                <div className="card blog-post blog-large wow fadeInUp  animated animated" style={{boxShadow: 'rgba(0, 0, 0, 0.29) 0px 0px 10px', visibility: 'visible', animationName: 'fadeInUp'}}>
                    <article>
                    <header className="entry-header">
                        <div className="entry-thumbnail" style={{paddingBottom: '20px'}}>
                        <img className width="100%" src={imageSource} alt={node.frontmatter.title} />
                        </div>
                        <div className="entry-date">{formatDate(node.frontmatter.date)}</div>
                        <h3 className="entry-title"><Link to={node.fields.slug}>{node.frontmatter.title}</Link></h3>
                    </header>
                    <div className="entry-content">
                        <p>
                        {/* To exploit the greatest results from your software delivery, your automated tests should be carefully planned. For this<a className href="/blog/top-5-android-UI-frameworks-for-automation-testing">Read More</a> */}
                        </p>
                    </div>
                    <footer className="entry-meta">
                    {node.frontmatter.category.map((cat, index, arr) => (
                        <ConcatWords arrCount={arr.length} index={index} key={cat}>
                        <Link to={`/blog/category/${kebabCase(cat)}`}>{cat}</Link>
                        </ConcatWords>
                    ))}
                    </footer>
                    </article>
                </div>
            </div>
        )
}
export default renderList;
