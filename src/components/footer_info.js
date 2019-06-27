// contains the footer information
import React, { Component } from 'react'
class FooterInfo extends Component {
    render() {
        return (
            <footer id="footer">
                <div className="container">
                    <div className="row">
                    <div className style={{textAlign: 'center',display:"contents"}}>
                        <div className="col-lg-3  col-md-3 col-sm-3 col-xs-6">
                        <h3 style={{color: 'white', marginBottom: '10px'}}>PRODUCT</h3>
                        <ul>
                          <li style={{display: 'flex'}}> <a href="https://frugaltesting.com/features/features">Features</a> </li>
                            <li style={{display: 'flex'}}> <a href="https://frugaltesting.com/pricing">Pricing</a> </li>
                        </ul>
                        </div>
                        <div className="col-lg-3  col-md-3 col-sm-3 col-xs-6">
                        <h3 style={{color: 'white', marginBottom: '10px'}}>SERVICES</h3>
                        <ul>
                            <li style={{display: 'flex'}}> <a href="https://frugaltesting.com/services">Performance Testing</a> </li>
                        </ul>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                        <h3 style={{color: 'white', marginBottom: '10px'}}> ABOUT </h3>
                        <ul>
                            <li style={{display: 'flex'}}> <a href="https://frugaltesting.com/contact"> Contact Us </a> </li>
                            <li style={{display: 'flex'}}> <a href="https://frugaltesting.com/careers">Careers</a> </li>
                        </ul>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                        <h3 style={{color: 'white', marginBottom: '10px'}}> COMPANY </h3>
                        <ul>
                            <li style={{display: 'flex'}}> <a href="https://frugaltesting.com/privacy">Privacy Policy </a> </li>
                            <li style={{display: 'flex'}}> <a href="https://frugaltesting.com/terms">Terms of Service </a> </li>
                        </ul>
                        </div>
                    </div>
                    <div className="col-sm-12 text-center" style={{paddingTop:"15px",paddingBottom:"15px"}}>
                        {/* <ul className="social-icons">
                        <li><a target="_blank" title="Like us on Facebook!" href="https://www.facebook.com/FrugalTest/"><i className="fa fa-facebook" /></a></li>
                        <li><a target="_blank" title="Follow our tweets!" href="https://twitter.com/FrugalTesting"><i className="fa fa-twitter" /></a></li>
                        <li><a target="_blank" title="Subscribe us on Youtube!" href="https://www.youtube.com/channel/UCjikgYGfeqU4ZPKQNm1V5tg"><i className="fa fa-youtube" /></a></li>
                        <li><a target="_blank" title="Follow us on LinkedIn!" href="https://in.linkedin.com/company/frugaltesting"><i className="fa fa-linkedin" /></a></li>
                        </ul> */}
                        <span className="social"><a target="_blank" className="fa fa-facebook fawidth" href="https://www.facebook.com/FrugalTest/" /></span>
                        <span className="social"><a target="_blank" className="fa fa-twitter fawidth" href="https://twitter.com/FrugalTesting" /></span>
                        <span className="social"><a target="_blank" className="fa fa-linkedin fawidth" href="https://www.linkedin.com/company/frugaltesting/" /></span>
                        <span className="social"><a target="_blank" className="fa fa-youtube fawidth" href="https://www.youtube.com/channel/UCjikgYGfeqU4ZPKQNm1V5tg"/></span>
                    </div>
                    <div className="col-sm-12 text-center" style={{marginTop: '10px'}}>
                        ©<span id="yearChange">2019</span> ALL RIGHTS RESERVED.<a href="https://www.frugaltesting.com"> FRUGAL PRODUCT SERVICES LLP.</a>
                    </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default FooterInfo
