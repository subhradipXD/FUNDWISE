import CustomCSS from "../custom.module.css";
import chat from "../assets/navImg/chat.png";
import notification from "../assets/navImg/notification-bell.png";
import mode from "../assets/day-and-night.png";
import light from "../assets/day-mode.png";
import dark from "../assets/night-mode.png";
import auto from "../assets/theme.png";
import profile from "../assets/navImg/user.png";
import home from "../assets/navImg/home-button.png";
import logOut from "../assets/navImg/turn-off.png";
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
                  {/* <Link to="/feed" style={{ textDecoration: "none" }}> */}
                    <img
                      src={home}
                      width={19}
                      alt="Home"
                      onClick={handleFeed}
                    />
                  {/* </Link> */}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  {/* <Link to="/message" style={{ textDecoration: "none" }}> */}
                    <img
                      src={chat}
                      width={19}
                      alt="Messages"
                      onClick={handleMessage}
                    />
                  {/* </Link> */}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  {/* <Link to="/notification" style={{ textDecoration: "none" }}> */}
                    <img
                      src={notification}
                      width={19}
                      alt="Notifications"
                      onClick={handleNotification}
                    />
                  {/* </Link> */}
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  <Link to="/profile" style={{ textDecoration: "none" }}>
                    <img
                      src={profile}
                      width={19}
                      alt="Profile"
                      onClick={handleProfile}
                    />
                  </Link>
                </a>
              </li>

              <li>
                <a className="nav-link" href="#">
                  <img
                    src={logOut}
                    width={17}
                    alt="Post"
                    onClick={handleLogout}
                  />
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
