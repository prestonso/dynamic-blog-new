// included in sidesection
import React from "react"
import {StaticQuery, graphql ,Link} from "gatsby"

const GetLatestBlog = (data) => {
  console.log(data);
  
  // const { allMarkdownRemark } = data
  // const { currentPage, numPages } = pageContext
  // let ret = [];
  //   for (let i = 0 ;i < 5; i=i+1){
  //       ret.push(allMarkdownRemark.edges[i](renderList));
  //   }
  //<LatestBlogLinks 
  //return <p>something</p>;
  return <StaticQuery query={graphql`
  {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC } 
      limit: 5  # number of latest blogs Change this thing to change numbere of displayed blogs
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
    
    return allMarkdownRemark.edges.map((d)=>{
      //return <p>{d.node.frontmatter.title}</p>
        return <div className="row" style={{marginBottom:"10px",paddingLeft:"13px"}}><Link to={d.node.fields.slug}>{d.node.frontmatter.title}</Link></div>
    })
  }}  />
}

export default GetLatestBlog
// export const query = graphql`
// query GetLatestBlog($limit: Int!) {
//   allMarkdownRemark(
//     sort: { fields: [frontmatter___date], order: DESC } 
//     limit: $limit 
//   ) {
//     edges {
//       node {
//         fields {
//           slug
//         }
//         frontmatter {
//           title
//           date
//           author
//           category
//           description
//           image {
//             childImageSharp {
//               fluid {
//                 src
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// }
// `
