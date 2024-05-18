import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { UserContext } from "../../Context/ContextProvider";
import { StyleDiv } from "./dasboardComponents/dashboard-css";
import DashboardSidebar from "./dasboardComponents/Dashboard-Sidebar";
import DashboardNavbar from "./dasboardComponents/Dashboard-Navbar";
import DashboardMain from "./dasboardComponents/Dashboard-Main";

function Dashboard() {
  const navigate = useNavigate();
  const [cookies] = useCookies(["token"]);
  const { user } = useContext(UserContext);

  // Check for the token and user role
  if (!cookies.token || (user && user.role !== "Admin")) {
    navigate("/");
  }

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
          </div>
        </div>
      </div>
    </StyleDiv>
  );
}

export default Dashboard;
