/* The layout of the 5 latest blogs displayed in each blog page */
import React from 'react'
import './social_style.css'
import GetLatestBlog from './getlatestblogs.js'
import SocialShare from "../components/social_share.js"

const SideSection =() => {
    return (
        <div className="col-sm-4" style={{maxWidth: '100%', paddingLeft: '0px'}} id="sticker">
            <div className="blog-post blog-large wow fadeInRight animated" data-wow-duration="1000ms" data-wow-delay="0ms" style={{visibility: 'visible', animationDuration: '1000ms', animationDelay: '0ms', animationName: 'fadeInRight'}}>
                <article>
                <div style={{paddingTop: '20px'}}>
                    <h5 className="blog-subtitle" style={{borderBottom: '4px solid red'}}>Our Latest Blogs</h5>
                    <GetLatestBlog />
                    <hr style={{marginTop: '0px', marginBottom: '0px'}} />
                </div>
                <div className="row">
              <SocialShare></SocialShare>
            </div>
                </article>
            </div>
        </div>
    )
}
export default SideSection
