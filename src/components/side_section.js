import React from 'react'
import './social_style.css'
import GetLatestBlog from './getlatestblogs.js'
import SocialShare from "../components/social_share.js"

const SideSection =() => {
    return (
        <div className="col-sm-4" style={{maxWidth: '100%', paddingLeft: '0px'}} id="sticker">
            <div className="blog-post blog-large wow fadeInRight animated" data-wow-duration="1000ms" data-wow-delay="0ms" style={{visibility: 'visible', animationDuration: '1000ms', animationDelay: '0ms', animationName: 'fadeInRight'}}>
                <article>
                {/* <div style={{paddingTop: '10px'}}>
                    <h5 className="blog-subtitle" style={{borderBottom: '4px solid red'}}>Search Inside Blogs</h5>
                    <input type="text" id="serchBox" className="blog-content" style={{boxShadow: '0 0 1px rgba(0,0,0,0.29)', border: 'none', padding: '4px 10px', width: '100%'}} placeholder="Keywords to be searched" />
                </div> */}
                {/* <div style={{paddingTop: '20px'}}>
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
                </div> */}
            
                <div style={{paddingTop: '20px'}}>
                    <h5 className="blog-subtitle" style={{borderBottom: '4px solid red'}}>Our Latest Blogs</h5>
                    {/* <p className="blog-content" style={{lineHeight: '17px'}}><a href="/blog/jmeter-regular-expression-extractor">JMeter-Regular Expression Extractor</a></p><hr style={{marginTop: '0px'}} />
                    <p className="blog-content" style={{lineHeight: '17px'}}><a href="/blog/whats-new-in-jmeter-5.0">What's New in JMeter 5.0?</a></p><hr style={{marginTop: '0px'}} />
                    <p className="blog-content" style={{lineHeight: '17px'}}><a href="/blog/start-your-first-free-load-test">Start Your First FREE Load Test with FrugalTest.</a></p><hr style={{marginTop: '0px'}} />
                    <p className="blog-content" style={{lineHeight: '17px'}}><a href="/blog/jmeter-ip-spoofing-for-load-testing">JMeter - IP Spoofing for Load Testing</a></p><hr style={{marginTop: '0px'}} />
                    <p className="blog-content" style={{lineHeight: '17px'}}><a href="/blog/jmeter-how-to-handle-ssl-handshake-exception">JMeter - How to handle SSLHandshakeException? </a></p>*/}
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