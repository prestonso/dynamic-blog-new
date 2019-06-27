/* deprecated in favor of navbar2.js
 * may be used for reference */
import React from 'react'
import { Link } from 'gatsby'
import Icon from './icon.svg'

class Navi extends React.Component {
  render() {
    const { location, title } = this.props
    return (
      <header id="header">
        <nav className={"navbar navbar-expand-lg flex-column flex-md-row navbar-fixed-top"} id="main-menu" >
          <div className="container">
            <div className="navbar-header">
          <button
              className="navbar-toggler right"
              type="button"
              data-toggle="collapse"
              data-target="#navbarTogglerDemo02"
              aria-controls="navbarTogglerDemo02"
              aria-expanded="false"
              aria-label="Toggle navigation"
          >
            {/* <span
                className="navbar-toggler-icon"
                style={{ backgroundColor: 'black' }}
              /> */}
              <img id="main_mobile_hamburger" src={Icon} style={{top: '19px', width: '30px', marginBottom: '0px',marginTop:'20px'}} />

          </button>
            <a className="navbar-brand" href="#" style={{paddingTop: "30px"}}>
              <img
                src="https://www.frugaltesting.com/resources/images/logo.png"
                width="40"
                height="40"
                className="d-inline-block align-top"
                alt=""
              />
              Frugal Testing
            </a>
            </div>
            {/* <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarTogglerDemo02"
              aria-controls="navbarTogglerDemo02"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span
                className="navbar-toggler-icon"
                style={{ backgroundColor: 'grey' }}
              />
            </button> */}
            <div
              className="justify-content-end collapse navbar-collapse"
              id="navbarTogglerDemo02"
              style={{ width: '100%' }}
            >
              <ul className="navbar-nav bd-navbar-nav flex-row justify-content-end mt-2 mr-lg-0" id="hellbro">
                <li
                  className={
                  //   location.pathname === '/' ? 'nav-item active' : 'nav-item'
                      'nav-item active'
                  }
                >
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                  {/* <a href="https://www.frugaltesting.com/">Home</a> */}
                </li>
                <li
                  className={
                  //   location.pathname === '/profile/'
                  //     ? 'nav-item active'
                      'nav-item active'
                  }
                >
                  <Link to="/profile/" className="nav-link">
                    Features
                  </Link>
                  {/* <a href="https://www.frugaltesting.com/features/features">Features</a> */}
                </li>
                <li
                  className={
                  //   location.pathname === '/profile/'
                  //     ? 'nav-item active'
                      'nav-item active'
                  }
                >
                  <Link to="/profile/" className="nav-link">
                    Services
                  </Link>
                  {/* <a href="https://www.frugaltesting.com/features/services">Services</a> */}
                </li>
                <li
                  className={
                  //   location.pathname === '/profile/'
                  //     ? 'nav-item active'
                  //     :
                      'nav-item active'
                  }
                >
                  <Link to="/profile/" className="nav-link">
                    Pricing
                  </Link>
                  {/* <a href="https://www.frugaltesting.com/features/pricing">Pricing</a> */}
                </li>
                <li
                  className={
                  //   location.pathname === '/profile/'
                  //     ? 'nav-item active'
                  //     : 
                      'nav-item active'
                  }
                >
                  <Link to="/profile/" className="nav-link">
                    Services
                  </Link>
                  {/* <a href="https://www.frugaltesting.com/blog/blog?page=1">Services</a> */}
                </li>
                <li
                  className={
                  //   location.pathname === '/profile/'
                  //     ? 'nav-item active'
                  //     : 
                      'nav-item active'
                  }
                >
                  <Link to="/profile/" className="nav-link">
                    Blog
                  </Link>
                  {/* <a href="https://www.frugaltesting.com/blog/blog?page=1">Services</a> */}
                </li>
                <li
                  className={
                  //   location.pathname === '/profile/'
                  //     ? 'nav-item active'
                  //     : 
                      'nav-item active'
                  }
                >
                  <Link to="/profile/" className="nav-link">
                    About
                  </Link>
                  {/* <a href="https://www.frugaltesting.com/blog/blog?page=1">Services</a> */}
                </li>
                <li
                  className={
                  //   location.pathname === '/profile/'
                  //     ? 'nav-item active'
                  //     : 
                      'nav-item active'
                  }
                >
                  <Link to="/profile/" className="nav-link">
                    login
                  </Link>
                  {/* <a href="https://www.frugaltesting.com/blog/blog?page=1">Services</a> */}
                </li>
                <li
                  className={
                  //   location.pathname === '/profile/'
                  //     ? 'nav-item active'
                  //     : 
                      'nav-item active'
                  }
                >
                  <Link to="/profile/" className="nav-link">
                    <span className="bige">
                      Request a Demo
                    </span>
                  </Link>
                  {/* <a href="https://www.frugaltesting.com/blog/blog?page=1">Services</a> */}
                </li>
                {/* <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Something else here</a>
                  </div>
                </li> */}
              </ul>
            </div>
            {/* <div className="navbar-nav flex-row ml-md-auto d-none d-md-flex" /> */}
          </div>
        </nav>
      </header>
    )
  }
}
export default Navi
