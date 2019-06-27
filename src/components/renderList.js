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
/* The layout of the cards of blogs at home page */
import React from "react"
import kebabCase from "lodash.kebabcase"
import { Link } from "gatsby"
import { Row, Cell } from "griding"

import './custom_style.css'
import ConcatWords from "../utils/ConcatWords"
import formatDate from "../utils/formatDate"
const renderList = ({ node }) => {
    const imageSource = node.frontmatter.image.childImageSharp.fluid.src
        return (
            <div className="col-md-6 col-sm-12 col-lg-4">
                <div className="card_custom card blog-post blog-large wow fadeInUp animated" style={{boxShadow: 'rgba(0, 0, 0, 0.29) 0px 0px 10px', visibility: 'visible', animationName: 'fadeInUp'}}>
                    <article>
                    <header className="entry-header">
                        <div className="entry-thumbnail" style={{paddingBottom: '20px'}}>
                        <Link to={node.fields.slug}>
                            <img className width="100%" src={imageSource} alt={node.frontmatter.title} style={{height:"12em"}}/>
                        </Link>
                        </div>
                        <div className="entry-date">{formatDate(node.frontmatter.date)}</div>
                        <h3 className="entry-title"><Link to={node.fields.slug}>{node.frontmatter.title}</Link></h3>
                    </header>
                     <div className="entry-content" style={{overflow:"hidden",textOverflow:"ellipsis",maxHeight:""}}>
                        {/* <p > */}
                        {node.frontmatter.description}
                        {/* </p> */}
                    </div> 
                    <footer className="entry-meta" style={{overflow:"hidden",textOverflow:"ellipsis",maxHeight:""}}>
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
