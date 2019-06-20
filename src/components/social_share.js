import React, { Component } from 'react'
import 'font-awesome/css/font-awesome.css'
//import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css');
import './social_style.css'
class SocialShare extends Component {
  render() {
    return (
      <div className="side_section ">
        <div>
          <h4 className="blog-subtitle" style={{paddingLeft:'10px'}}>Share This Blog</h4>
        </div>
        <div style={{ paddingBottom: '20px', paddingLeft:'15px' }} className="row">
          <div className="social">
            <a
              href={fbsharer()}
              target="_blank"
              alt="Share on Facebook"
              className="fa fa-facebook"
            />
          </div>
          <div className="social">
            <a
              href={linkedinsharer()}
              target="_blank"
              alt="Share on LinkedIn"
              className="fa fa-linkedin"
            />
          </div>
          <div className="social">
            <a
              href={twittersharer()}
              target="_blank"
              alt="Share on twitter"
              className="fa fa-twitter"
            />
          </div>
          <div className="social">
            <a target="_blank" href={gmailsharer()} className="fa fa-google" />
          </div>
          <div className="social">
            <a
              href={whatsappshare()}
              target="_blank"
              alt="Share on Whatsapp"
              className="fa fa-whatsapp"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default SocialShare
const linkedinsharer = () => {
    let x = escape(window.location.href)
    let y = x.slice(8)
    return `https://www.linkedin.com/shareArticle?mini=true&url=https%3A"${y}`
  }
  const fbsharer = () => {
    return `https://www.facebook.com/sharer/sharer.php?u=${escape(
      window.location.href
    )}&t=${document.title}`
  }
  const whatsappshare = () => {
    return `https://api.whatsapp.com/send?text="${escape(window.location.href)}`
  }
  const gmailsharer = () => {
    let x = escape(window.location.href)
    let y = document.title
    return `https://mail.google.com/mail/?view=cm&fs=1&su="${y}"&tf=1&body="${x}`
  }
  const twittersharer = () => {
    let x = escape(window.location.href)
    let y = x.slice(8)
    return `https://twitter.com/home?status=https%3A"${y}`
  }