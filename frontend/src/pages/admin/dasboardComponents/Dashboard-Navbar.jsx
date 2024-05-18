import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import FeatherIcon from "feather-icons-react";
import { UserContext } from "../../../Context/ContextProvider";

function DashboardNavbar() {
  let [isLayerVisible, setLayerVisible] = useState(false);
  let [isNotificationVisible, setNotificationVisible] = useState(false);
  const [cookies, setCookies, removeCookie] = useCookies(["token"]);
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const handleLayer = () => {
    setLayerVisible(!isLayerVisible);
  };

  const handleNotification = () => {
    setNotificationVisible(!isNotificationVisible);
  };

  const handleLogout = () => {
    // Remove the authentication token cookie
    removeCookie("token");
    // Clear user context
    setUser(null);
    // Redirect to login page
    navigate("/");
  };

  return (
    <nav className="main-nav--bg">
      <div className="container main-nav">
        <div className="main-nav-start">
          <div className="search-wrapper">
            <FeatherIcon icon="search" />
            <input type="text" placeholder="Enter keywords ..." required />
          </div>
        </div>
        <div className="main-nav-end">
          <div className="notification-wrapper">
            <button
              className="gray-circle-btn dropdown-btn"
              title="To messages"
              type="button"
              onClick={handleNotification}
            >
              <span className="sr-only">To messages</span>
              <span className="icon notification active" aria-hidden="true" />
            </button>
            <ul
              className={`users-item-dropdown notification-dropdown dropdown ${
                isNotificationVisible ? "active" : ""
              }`}
            >
              <li>
                <a href="##">
                  <div className="notification-dropdown-icon info">
                    <FeatherIcon icon="check" />
                  </div>
                  <div className="notification-dropdown-text">
                    <span className="notification-dropdown__title">
                      System just updated
                    </span>
                    <span className="notification-dropdown__subtitle">
                      The system has been successfully upgraded. Read more here.
                    </span>
                  </div>
                </a>
              </li>
              <li>
                <a href="##">
                  <div className="notification-dropdown-icon danger">
                    <FeatherIcon icon="info" />
                  </div>
                  <div className="notification-dropdown-text">
                    <span className="notification-dropdown__title">
                      The cache is full!
                    </span>
                    <span className="notification-dropdown__subtitle">
                      Unnecessary caches take up a lot of memory space and
                      interfere ...
                    </span>
                  </div>
                </a>
              </li>
              <li>
                <a href="##">
                  <div className="notification-dropdown-icon info">
                    <FeatherIcon icon="check" />
                  </div>
                  <div className="notification-dropdown-text">
                    <span className="notification-dropdown__title">
                      New Subscriber here!
                    </span>
                    <span className="notification-dropdown__subtitle">
                      A new subscriber has subscribed.
                    </span>
                  </div>
                </a>
              </li>
              <li>
                <a className="link-to-page" href="##">
                  Go to Notifications page
                </a>
              </li>
            </ul>
          </div>
          <div className="nav-user-wrapper">
            <button
              href="##"
              className="nav-user-btn dropdown-btn"
              title="My profile"
              type="button"
              onClick={handleLayer}
            >
              <span className="sr-only">My profile</span>
              <span className="nav-user-img">
                <picture>
                  <source
                    srcSet="./img/avatar/avatar-illustrated-02.webp"
                    type="image/webp"
                  />
                  <img
                    src="./img/avatar/avatar-illustrated-02.webp"
                    alt="User name"
                  />
                </picture>
              </span>
            </button>
            <ul
              className={`users-item-dropdown nav-user-dropdown dropdown ${
                isLayerVisible ? "active" : ""
              }`}
            >
              <li>
                <a href="##">
                  <FeatherIcon icon="user" />
                  <span>Profile</span>
                </a>
              </li>
              <li>
                <a href="##">
                  <FeatherIcon icon="settings" />
                  <span>Account settings</span>
                </a>
              </li>
              <li>
                <Link className="danger" onClick={handleLogout}>
                  <FeatherIcon icon="log-out" />
                  <span>Log out</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default DashboardNavbar;
