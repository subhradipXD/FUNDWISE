import React from "react";
import { StyleDiv } from "./dasboardComponents/dashboard-css";
import DashboardSidebar from "./dasboardComponents/Dashboard-Sidebar";
import DashboardNavbar from "./dasboardComponents/Dashboard-Navbar";
import DashboardMain from "./dasboardComponents/Dashboard-Main";
import DashboardFooter from "./dasboardComponents/Dashboard-Footer";
function Dashboard() {
  return (
    <StyleDiv>
      <div className="body">
        <div className="layer" />
        {/* ! Body */}
        <a className="skip-link sr-only" href="#skip-target">
          Skip to content
        </a>
        <div className="page-flex">
          {/* ! Sidebar */}
          <DashboardSidebar />
          <div className="main-wrapper">
            {/* ! Main nav */}
            <DashboardNavbar />
            {/* ! Main */}
            <DashboardMain />
            {/* ! Footer */}
            <DashboardFooter />
          </div>
        </div>
      </div>
    </StyleDiv>
  );
}

export default Dashboard;
