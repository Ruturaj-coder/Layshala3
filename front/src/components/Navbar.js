import React from "react";
import { Outlet, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  return (
    <>
      {/* Top Welcome Bar */}
      <nav className="navbar" style={{backgroundColor: '#800000', height: '30px', padding: '0.1rem'}}>
        <div className="container-fluid d-flex justify-content-center align-items-center">
          <span className="navbar-text text-center text-white" style={{lineHeight: '10px', whiteSpace: 'nowrap', fontFamily: 'Merriweather, serif', fontSize: '19px'}}>
            Welcome to Layshala Kathak classes
          </span>
        </div>
      </nav>

      {/* Main Navbar */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid d-flex align-items-center">
          {/* Logo and Foundation Name */}
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img src={process.env.PUBLIC_URL + '/assets/images/Layshala_Logo.png'} alt="Logo" height="70" />
            <div className="ms-2" style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '30px', color: 'red', fontWeight: 'bold', fontFamily: 'serif' }}>Layshala</span>
              <span style={{ fontSize: '18px', color: 'black', fontWeight: 'bold', fontFamily: 'serif', letterSpacing: '1.5px' }}>Lalit Kala Foundation</span>
            </div>
          </Link>

          {/* Toggler for offcanvas (only visible on mobile view) */}
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Regular Navbar (visible on larger screens) */}
          <div className="collapse navbar-collapse d-none d-lg-flex" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0" style={{ fontFamily: 'Open Sans, sans-serif' }}>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  About us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Log in
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/register">
                  Sign up
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact us
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="#">
                      Action
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Another action
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Something else here
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="d-flex ms-3" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>

          {/* Offcanvas Navbar (Mobile View) */}
          <div className="offcanvas offcanvas-end d-lg-none" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#">
                    About us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Log in
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/register">
                    Sign up
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    Contact us
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="#">
                        Action
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        Another action
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        Something else here
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
              <form className="d-flex ms-3" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>

        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default Navbar;
