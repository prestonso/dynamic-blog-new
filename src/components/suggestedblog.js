import React from "react"
import {StaticQuery, graphql ,Link} from "gatsby"
import ConcatWords from "../utils/ConcatWords"
import formatDate from "../utils/formatDate"
import kebabCase from "lodash.kebabcase"
var Chance = require('chance');

const SuggestedBlog = (data) => {
//   console.log(data);
  
  // const { allMarkdownRemark } = data
  // const { currentPage, numPages } = pageContext
  // let ret = [];
  //   for (let i = 0 ;i < 5; i=i+1){
  //       ret.push(allMarkdownRemark.edges[i](renderList));
  //   }
  //<LatestBlogLinks 
  //return <p>something</p>;
  var chance = new Chance();
  return <StaticQuery query={graphql`
  {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC } 
      #limit: 2
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
  `}
  render={({allMarkdownRemark})=>{
    //console.log(data);
    //return <p></p>
    console.log(allMarkdownRemark.edges);
    let xx = chance.pickset(allMarkdownRemark.edges,2);
    return xx.map((d)=>{
         return (<div className="col-md-6 col-lg-4">
                <div className="card_custom card blog-post blog-large wow fadeInUp animated" style={{boxShadow: 'rgba(0, 0, 0, 0.29) 0px 0px 10px', visibility: 'visible', animationName: 'fadeInUp',height:"480px"}}>
                    <article>
                    <header className="entry-header">
                        <div className="entry-thumbnail" style={{margin:"-15px -15px"}}>
                        <Link to={d.node.fields.slug}>
                            <img className width="100%" src={d.node.frontmatter.image.childImageSharp.fluid.src} alt={d.node.frontmatter.title} style={{height:"12em"}}/>
                        </Link>
                        </div>
                        <div className="entry-date">{formatDate(d.node.frontmatter.date)}</div>
                        <h3 className="entry-title"><Link to={d.node.fields.slug}>{d.node.frontmatter.title}</Link></h3>
                    </header>
                     <div className="entry-content" style={{overflow:"hidden",textOverflow:"ellipsis",maxHeight:"70px"}}>
                        {d.node.frontmatter.description}
                    </div> 
                    <footer className="entry-meta" style={{overflow:"hidden",textOverflow:"ellipsis",maxHeight:"70px"}}>
                    {d.node.frontmatter.category.map((cat, index, arr) => (
                        <ConcatWords arrCount={arr.length} index={index} key={cat}>
                        <Link to={`/blog/category/${kebabCase(cat)}`}>{cat}</Link>
                        </ConcatWords>
                    ))}
                    </footer>
                    </article>
                </div>
            </div>
         )
    })
  }}  />
}

export default SuggestedBlog