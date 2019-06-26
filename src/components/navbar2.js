// The currently used navbar used in favor of nav_bar.js
import React from 'react'
import { Link } from 'gatsby'

class Navi extends React.Component {
  render() {
    const { location, title } = this.props
    return (
<header id="header">
<nav id="main-menu" className="navbar navbar-default navbar-light bg-light fixed-top navbar-expand-lg" style={{padding:"0rem 1rem 0rem 1rem"}}>
  <div className="container">
    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target=".navbar-collapse">
      <span className="sr-only">Toggle navigation</span>
      ☰</button>
    {/* <a className="navbar-brand" href="/"><img src="https://www.frugaltesting.com/resources/images/logo.png" alt="logo" title="Frugal-Logo" style={{marginBottom:"0px"}}/></a> */}
    <span className="frugal-testing" style={{marginLeft: '10px', fontWeight: 'bold', textAlign: 'center', marginTop: '18px', textTransform: 'uppercase', cursor: 'pointer'}}><a href="/" style={{textDecoration: 'none', color: '#424242'}}><img src="https://www.frugaltesting.com/resources/images/logo.png" alt="logo" title="Frugal-Logo" style={{marginBottom:"0px"}}/>Frugal Testing</a>
    </span>
    <div id="main-navbar" className="collapse navbar-collapse ml-auto justify-content-end">
      <ul id="MyHeader" className="nav navbar-nav justify-content-end" style={{textTransform: 'uppercase', fontSize: '14px', fontWeight: 600}}>
        <li className="scroll nav-item"><a href="https://www.frugaltesting.com/" className="nav-link">Home</a>
        </li>
        <li className="scroll nav-item"><a href="https://www.frugaltesting.com/features/features" className="nav-link">Features</a>
        </li>
        <li className="scroll nav-item"><a href="https://www.frugaltesting.com/services" className="nav-link">Services</a>
        </li>
        <li className="scroll nav-item"><a href="https://www.frugaltesting.com/pricing" className="nav-link">Pricing</a>
        </li>
        <li className="scroll active nav-item"><a href="/blog" className="nav-link">Blog</a>
        </li>
        <li className="scroll dropdown nav-item"><a className="cursor nav-link" href="#">About</a>
          <div className="dropdown-content">
            <a href="https://www.frugaltesting.com/case-studies/casestudies">Case studies</a>
            <a href="https://www.frugaltesting.com/ourteam">Our Team</a>
            <a href="https://www.frugaltesting.com/careers">Careers</a>
            <a href="https://www.frugaltesting.com/contact">Contact Us</a>
          </div>
        </li>
        <li className="scroll nav-item"><a href="https://www.frugaltesting.com/login" className="nav-link">Login</a>
        </li>
        <li className="scroll nav-item">
          <a href="https://www.frugaltesting.com/contact" className="nav-link">
            <span style={{background: '#45aed6', padding: '10px', color: 'white', borderRadius: '10px'}}>Request A Demo</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</header>
 )
}
}
export default Navi
