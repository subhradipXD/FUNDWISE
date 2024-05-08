import { useState } from "react";

function DashboardSidebar() {
    
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  const [isSubMenuVisible1, setSubMenuVisible1] = useState(false);

  const toggleSubMenu1 = () => {
    setSubMenuVisible1(!isSubMenuVisible1);
  };
  const [isSubMenuVisible2, setSubMenuVisible2] = useState(false);

  const toggleSubMenu2 = () => {
    setSubMenuVisible2(!isSubMenuVisible2);
  };
  const [isSubMenuVisible3, setSubMenuVisible3] = useState(false);

  const toggleSubMenu3 = () => {
    setSubMenuVisible3(!isSubMenuVisible3);
  };
  const [isSubMenuVisible4, setSubMenuVisible4] = useState(false);

  const toggleSubMenu4 = () => {
    setSubMenuVisible4(!isSubMenuVisible4);
  };
  const [isSubMenuVisible5, setSubMenuVisible5] = useState(false);

  const toggleSubMenu5 = () => {
    setSubMenuVisible5(!isSubMenuVisible5);
  };
  const [isSubMenuVisible6, setSubMenuVisible6] = useState(false);

  const toggleSubMenu6 = () => {
    setSubMenuVisible6(!isSubMenuVisible6);
  };
    return(
        <><aside className={`sidebar ${isSidebarVisible ? 'hidden' : ''}`}>
        <div className="sidebar-start">
          <div className="sidebar-head">
            <a href="/" className="logo-wrapper" title="Home">
              <span className="sr-only">Home</span>
              <span className="icon logo" aria-hidden="true" />
              <div className="logo-text">
                <span className="logo-title">Elegant</span>
                <span className="logo-subtitle">Dashboard</span>
              </div>
            </a>
            <button
              className={`sidebar-toggle transparent-btn ${isSidebarVisible ? 'rotated' : ''}`}
              title="Menu"
              type="button"
              onClick={toggleSidebar}
            >
              <span className="sr-only">Toggle menu</span>
              <span className="icon menu-toggle" aria-hidden="true" />
            </button>
          </div>
          <div className="sidebar-body">
            <ul className="sidebar-body-menu">
              <li>
                <a className="active" href="/">
                  <span className="icon home" aria-hidden="true" />
                  Dashboard
                </a>
              </li>
              <li>
                <a className="show-cat-btn" href="##" onClick={toggleSubMenu1}>
                  <span className="icon document" aria-hidden="true" />
                  Posts
                  <span
                    className={`category__btn transparent-btn ${isSubMenuVisible1 ? 'rotated' : ''}`}
                    title="Open list"
                  >
                    <span className="sr-only">Open list</span>
                    <span className="icon arrow-down" aria-hidden="true" />
                  </span>
                </a>
                <ul className={`cat-sub-menu ${isSubMenuVisible1 ? 'visible' : ''}`}>
                  <li>
                    <a href="posts.html">All Posts</a>
                  </li>
                  <li>
                    <a href="new-post.html">Add new post</a>
                  </li>
                </ul>
              </li>
              <li>
                <a className="show-cat-btn" href="##" onClick={toggleSubMenu2}>
                  <span className="icon folder" aria-hidden="true" />
                  Categories
                  <span
                    className={`category__btn transparent-btn ${isSubMenuVisible2 ? 'rotated' : ''}`}
                    title="Open list"
                  >
                    <span className="sr-only">Open list</span>
                    <span className="icon arrow-down" aria-hidden="true" />
                  </span>
                </a>
                <ul className={`cat-sub-menu ${isSubMenuVisible2 ? 'visible' : ''}`}>
                  <li>
                    <a href="categories.html">All categories</a>
                  </li>
                </ul>
              </li>
              <li>
                <a className="show-cat-btn" href="##" onClick={toggleSubMenu3}>
                  <span className="icon image" aria-hidden="true" />
                  Media
                  <span
                    className={`category__btn transparent-btn ${isSubMenuVisible3 ? 'rotated' : ''}`}
                    title="Open list"
                  >
                    <span className="sr-only">Open list</span>
                    <span className="icon arrow-down" aria-hidden="true" />
                  </span>
                </a>
                <ul className={`cat-sub-menu ${isSubMenuVisible3 ? 'visible' : ''}`}>
                  <li>
                    <a href="media-01.html">Media-01</a>
                  </li>
                  <li>
                    <a href="media-02.html">Media-02</a>
                  </li>
                </ul>
              </li>
              <li>
                <a className="show-cat-btn" href="##" onClick={toggleSubMenu4}>
                  <span className="icon paper" aria-hidden="true" />
                  Pages
                  <span
                    className={`category__btn transparent-btn ${isSubMenuVisible4 ? 'rotated' : ''}`}
                    title="Open list"
                  >
                    <span className="sr-only">Open list</span>
                    <span className="icon arrow-down" aria-hidden="true" />
                  </span>
                </a>
                <ul className={`cat-sub-menu ${isSubMenuVisible4 ? 'visible' : ''}`}>
                  <li>
                    <a href="pages.html">All pages</a>
                  </li>
                  <li>
                    <a href="new-page.html">Add new page</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="comments.html">
                  <span className="icon message" aria-hidden="true" />
                  Comments
                </a>
                <span className="msg-counter">7</span>
              </li>
            </ul>
            <span className="system-menu__title">system</span>
            <ul className="sidebar-body-menu">
              <li>
                <a href="appearance.html">
                  <span className="icon edit" aria-hidden="true" />
                  Appearance
                </a>
              </li>
              <li>
                <a className="show-cat-btn" href="##" onClick={toggleSubMenu5}>
                  <span className="icon category" aria-hidden="true" />
                  Extentions
                  <span
                    className={`category__btn transparent-btn ${isSubMenuVisible5 ? 'rotated' : ''}`}
                    title="Open list"
                  >
                    <span className="sr-only">Open list</span>
                    <span className="icon arrow-down" aria-hidden="true" />
                  </span>
                </a>
                <ul className={`cat-sub-menu ${isSubMenuVisible5 ? 'visible' : ''}`}>
                  <li>
                    <a href="extention-01.html">Extentions-01</a>
                  </li>
                  <li>
                    <a href="extention-02.html">Extentions-02</a>
                  </li>
                </ul>
              </li>
              <li>
                <a className="show-cat-btn" href="##" onClick={toggleSubMenu6}>
                  <span className="icon user-3" aria-hidden="true" />
                  Users
                  <span
                    className={`category__btn transparent-btn ${isSubMenuVisible6 ? 'rotated' : ''}`}
                    title="Open list"
                  >
                    <span className="sr-only">Open list</span>
                    <span className="icon arrow-down" aria-hidden="true" />
                  </span>
                </a>
                <ul className={`cat-sub-menu ${isSubMenuVisible6 ? 'visible' : ''}`}>
                  <li>
                    <a href="users-01.html">Users-01</a>
                  </li>
                  <li>
                    <a href="users-02.html">Users-02</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="##">
                  <span className="icon setting" aria-hidden="true" />
                  Settings
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="sidebar-footer">
          <a href="##" className="sidebar-user">
            <span className="sidebar-user-img">
              <picture>
                <source
                  srcSet="./img/avatar/avatar-illustrated-01.png"
                  type="image/webp"
                />
                <img
                  src="./img/avatar/avatar-illustrated-01.png"
                  alt="User name"
                />
              </picture>
            </span>
            <div className="sidebar-user-info">
              <span className="sidebar-user__title">Nafisa Sh.</span>
              <span className="sidebar-user__subtitle">
                Support manager
              </span>
            </div>
          </a>
        </div>
      </aside></>
    );
}

export default DashboardSidebar;