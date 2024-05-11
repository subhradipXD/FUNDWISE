import { NavLink, useLocation } from "react-router-dom";
import { Link } from "react-scroll";
import CustomCSS from "../custom.module.css";

function Navbar() {
  const location = useLocation();
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light bg-light fixed-top ${CustomCSS.navBar}`}
    >
      <div className="container">
        <NavLink className={`navbar-brand ${CustomCSS.navbarBrand}`} to="/">
          <span className={CustomCSS.logoText}>Fund</span>Wise
        </NavLink>
        <button
          className={`navbar-toggler ${CustomCSS.navbarToggler}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul
            className={`navbar-nav ms-auto mb-2 mb-lg-0 ${CustomCSS.navbarNav}`}
          >
            {location.pathname !== "/about" &&
              location.pathname !== "/contact" && (
                <li className="nav-item">
                  <Link className={`nav-link ${CustomCSS.navLink}`} to="home">
                    Home
                  </Link>
                </li>
              )}
            {location.pathname !== "/" && (
              <li className="nav-item">
                <NavLink className={`nav-link ${CustomCSS.navLink}`} to="/">
                  Home
                </NavLink>
              </li>
            )}
            <li className="nav-item">
              <NavLink className={`nav-link ${CustomCSS.navLink}`} to="/about">
                About
              </NavLink>
            </li>
            {location.pathname !== "/about" &&
              location.pathname !== "/contact" && (
                <>
                  <li className="nav-item">
                    <Link
                      className={`nav-link ${CustomCSS.navLink}`}
                      to="services"
                    >
                      Services
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className={`nav-link ${CustomCSS.navLink}`} to="team">
                      Team
                    </Link>
                  </li>
                </>
              )}
            <li className="nav-item">
              <NavLink
                className={`nav-link ${CustomCSS.navLink}`}
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={`nav-link ${CustomCSS.navLink}`} to="/login">
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={`nav-link ${CustomCSS.navLink}`} to="/register">
                Sign in
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
