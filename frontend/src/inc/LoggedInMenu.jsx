import { IoHomeOutline } from "react-icons/io5";
// import { IoChatbubblesOutline } from "react-icons/io5";
// import { IoNotificationsOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { IoLogOutOutline } from "react-icons/io5";

import CustomCSS from "../custom.module.css";
// import mode from "../assets/day-and-night.png";
// import light from "../assets/day-mode.png";
// import dark from "../assets/night-mode.png";
// import auto from "../assets/theme.png";
import { NavLink, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";

function LoggedInMenu() {
  const navigate = useNavigate();
  const [cookies, setCookies, removeCookie] = useCookies(["token"]);
  const handleLogout = () => {
    removeCookie("token");
    navigate("/");
  };
  const handleFeed = () => {
    if ("token") {
      navigate("/feed");
    }
  };
  const handleProfile = () => {
    if ("token") {
      navigate("/profile");
    }
  };
  const handleMessage = () => {
    if ("token") {
      navigate("/message");
    }
  };
  const handleNotification = () => {
    if ("token") {
      navigate("/notification");
    }
  };

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
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 nav nav-underline">
              {/* <li className="nav-item dropdown">
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
              </li> */}
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  {/* <Link to="/feed" style={{ textDecoration: "none" }}> */}
                  <IoHomeOutline onClick={handleFeed} />
                  {/* </Link> */}
                </a>
              </li>
              {/* <li className="nav-item"> */}
                {/* <a className="nav-link" href="#"> */}
                  {/* <Link to="/message" style={{ textDecoration: "none" }}> */}
                  {/* <IoChatbubblesOutline onClick={handleMessage} /> */}
                  {/* </Link> */}
                {/* </a> */}
              {/* </li> */}
              {/* <li className="nav-item"> */}
                {/* <a className="nav-link" href="#"> */}
                  {/* <Link to="/notification" style={{ textDecoration: "none" }}> */}
                  {/* <IoNotificationsOutline onClick={handleNotification} /> */}
                  {/* </Link> */}
                {/* </a> */}
              {/* </li> */}
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <Link to="/profile" style={{ textDecoration: "none" }}>
                    <CgProfile onClick={handleProfile} />
                  </Link>
                </a>
              </li>
              <li>
                <a className="nav-link" href="#">
                  <IoLogOutOutline
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Sure want to Log Out?
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={handleLogout}
                  data-bs-dismiss="modal"
                >
                  LogOut
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoggedInMenu;
