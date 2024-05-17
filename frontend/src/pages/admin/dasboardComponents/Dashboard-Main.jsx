import React, { useState, useEffect } from "react";
import FeatherIcon from "feather-icons-react";
import axios from "axios";

function DashboardMain() {
  const baseURL = "http://localhost:2000";
  const [userCounts, setUserCounts] = useState({});

  const countUsersByRole = (users) => {
    const usersByRole = {};

    // Initialize usersByRole object with all roles set to 0
    users.forEach((user) => {
      const { role } = user;
      if (!usersByRole[role]) {
        usersByRole[role] = 0;
      }
    });

    // Count the number of users for each role
    users.forEach((user) => {
      const { role } = user;
      usersByRole[role]++;
    });

    return usersByRole;
  };

  const getUsers = async () => {
    try {
      const res = await axios.get(`${baseURL}/admin/`);
      const users = res.data;
      const usersByRole = countUsersByRole(users);
      setUserCounts(usersByRole);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <main className="main users chart-page" id="skip-target">
        <div className="container">
          <h2 className="main-title">Dashboard</h2>
          <div className="row stat-cards">
            


          <div className="col-md-6 col-xl-3">
              <article className="stat-cards-item">
                <div className="stat-cards-icon primary">
                  <FeatherIcon icon="bar-chart-2" />
                </div>
                <div className="stat-cards-info">
                  <p className="stat-cards-info__num">
                    {userCounts.Admin || 0}
                  </p>
                  <p className="stat-cards-info__title">Total Admin</p>
                  
                </div>
              </article>
            </div>



            <div className="col-md-6 col-xl-3">
              <article className="stat-cards-item">
                <div className="stat-cards-icon primary">
                  <FeatherIcon icon="bar-chart-2" />
                </div>
                <div className="stat-cards-info">
                  <p className="stat-cards-info__num">
                    {userCounts.Investor || 0}
                  </p>
                  <p className="stat-cards-info__title">Total Investor</p>
                 
                </div>
              </article>
            </div>
            <div className="col-md-6 col-xl-3">
              <article className="stat-cards-item">
                <div className="stat-cards-icon purple">
                  <FeatherIcon icon="file" />
                </div>
                <div className="stat-cards-info">
                  <p className="stat-cards-info__num">
                    {userCounts.Founder || 0}
                  </p>
                  <p className="stat-cards-info__title">Total Founder</p>
                  
                </div>
              </article>
            </div>
          </div>
          
        </div>
      </main>
    </>
  );
}

export default DashboardMain;
