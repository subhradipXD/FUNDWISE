import { useState } from "react";
import FeatherIcon from 'feather-icons-react';

function DashboardNavbar() {
    let [isLayerVisible, setLayerVisible] = useState(false);

    const handleLayer = () => {
      setLayerVisible(!isLayerVisible);
    };
  
    let [isNotificationVisible, setNotificationVisible] = useState(false);
  
    const handleNotification = () => {
      setNotificationVisible(!isNotificationVisible);
    };
    return(
        <><nav className="main-nav--bg">
        <div className="container main-nav">
          <div className="main-nav-start">
            <div className="search-wrapper">
              <FeatherIcon icon="search" />
              <input
                type="text"
                placeholder="Enter keywords ..."
                required
              />
            </div>
          </div>
          <div className="main-nav-end">
            {/* <button
              className="sidebar-toggle transparent-btn"
              title="Menu"
              type="button"
            >
              <span className="sr-only">Toggle menu</span>
              <span
                className="icon menu-toggle--gray"
                aria-hidden="true"
              />
            </button>
            <div className="lang-switcher-wrapper">
              <button
                className="lang-switcher transparent-btn"
                type="button"
              >
                EN
                <FeatherIcon icon="chevron-down" />
              </button>
              <ul className="lang-menu dropdown">
                <li>
                  <a href="##">English</a>
                </li>
                <li>
                  <a href="##">French</a>
                </li>
                <li>
                  <a href="##">Uzbek</a>
                </li>
              </ul>
            </div>
            <button
              className="theme-switcher gray-circle-btn"
              type="button"
              title="Switch theme"
            >
              <span className="sr-only">Switch theme</span>
              <FeatherIcon className="sun-icon" icon="sun" />
              <FeatherIcon className="moon-icon" icon="moon" />
            </button> */}
            <div className="notification-wrapper">
              <button
                className="gray-circle-btn dropdown-btn"
                title="To messages"
                type="button"
                onClick={handleNotification}
              >
                <span className="sr-only">To messages</span>
                <span
                  className="icon notification active"
                  aria-hidden="true"
                />
              </button>
              <ul className={`users-item-dropdown notification-dropdown dropdown ${isNotificationVisible ? 'active' : ''}`}>
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
                        The system has been successfully upgraded. Read
                        more here.
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
                        Unnecessary caches take up a lot of memory space
                        and interfere ...
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
              <ul className={`users-item-dropdown nav-user-dropdown dropdown ${isLayerVisible ? 'active' : ''}`}>
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
                  <a className="danger" href="##">
                    <FeatherIcon icon="log-out" />
                    <span>Log out</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav></>
    );
}

export default DashboardNavbar;