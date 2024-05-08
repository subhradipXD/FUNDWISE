import CustomCSS from "../custom.module.css";
import mode from "../assets/day-and-night.png";
import light from "../assets/day-mode.png";
import dark from "../assets/night-mode.png";
import auto from "../assets/theme.png";
import { IoSearchOutline } from "react-icons/io5";
import profile from "../assets/navImg/user.png";
import home from "../assets/navImg/home-button.png";
import lgot from "../assets/navImg/turn-off.png";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

import { MdOutlineDashboardCustomize } from "react-icons/md";

function LoggedInMenu() {
  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top bg-body-tertiary">
        <div className="container-fluid">
          <NavLink className={`navbar-brand ${CustomCSS.navbarBrand}`} to="/">
            <span className={CustomCSS.logoText}>Fund</span>Wise
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-primary" type="submit">
              <IoSearchOutline style={{ fontSize: "20px" }} />

              </button>
            </form>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 nav nav-underline">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  to="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img src={mode} width={20} alt="Mode" />
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item">
                      <img src={light} width={20} alt="Light" />{" "}
                      <span>Light</span>
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item">
                      <img src={dark} width={20} alt="Dark" />
                      <span>Dark</span>
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item">
                      <img src={auto} width={20} alt="Auto" /> <span>Auto</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  <Link to="/feed" style={{ textDecoration: "none" }}>
                    <img src={home} width={19} alt="Home" />
                  </Link>
                </a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="#">
                  <Link to="/message" style={{ textDecoration: "none" }}>
                    <img src={chat} width={19} alt="Messages" />
                  </Link>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <Link to="/notification" style={{ textDecoration: "none" }}>
                    <img src={notification} width={19} alt="Notifications" />
                  </Link>
                </a>
              </li> */}
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <div className="btn-group dropstart">
                    <button
                      type="button"
                      className="btn btn-info btn-sm dropdown-toggle"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img src={profile} width={19} alt="Profile" />
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          <Link
                            to="/profile"
                            style={{ textDecoration: "none" }}
                          >
                            <img src={profile} width={19} alt="Profile" /> My
                            Profile
                          </Link>
                        </a>
                      </li>
                      {/* <li>
                        <a
                          className="dropdown-item btn btn-primary"
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#staticBackdrop"
                        >
                          <img src={post} width={17} alt="Post" />
                          <span className="mx-1">New Post</span>
                        </a>
                      </li> */}
                      <li>
                        <a className="dropdown-item" href="#">
                          <img src={lgot} width={17} alt="Post" />
                          <span className="mx-1">Log Out</span>
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <Link
                            to="/dashboard"
                            style={{ textDecoration: "none" }}
                          >
                            <MdOutlineDashboardCustomize
                              style={{ fontSize: "20px" }}
                            />
                            My Dashboard
                          </Link>
                        </a>
                      </li>
                    </ul>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </>
  );
}

export default LoggedInMenu;
