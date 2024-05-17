import React, { useState, useEffect } from "react";
import FeatherIcon from "feather-icons-react";
import axios from "axios";
import UserImg from "../../../assets/navImg/user.png";
import Swal from 'sweetalert2';
function DashboardMain() {
  const baseURL = "http://localhost:2000";
  const [userCounts, setUserCounts] = useState({});
  const [founders, setFounders] = useState([]);
  const [investors, setInvestors] = useState([]);

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

  const deleteUser = async (userId, userRole, userName) => {
    try {
      console.log(userId);
      await axios.delete(`${baseURL}/admin/${userId}`);
      Swal.fire({
        icon: 'success',
        title: 'User Deleted',
        text: `User ${userName} with role ${userRole} has been deleted successfully.`,
        confirmButtonText: 'OK'
      });
      // Fetch the updated user list after deletion
      getUsers();
    } catch (err) {
      console.log(err);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong! Please try again.',
      });
    }
  };

  const getUsers = async () => {
    try {
      const res = await axios.get(`${baseURL}/admin/`);
      const users = res.data;
      const usersByRole = countUsersByRole(users);
      setUserCounts(usersByRole);
      const founderUsers = users.filter((user) => user.role === "Founder");
      const investorUsers = users.filter((user) => user.role === "Investor");
      setFounders(founderUsers);
      setInvestors(investorUsers);
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

      <div className="container">
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center">
            <strong>Founder</strong>
          </div>
          <div className="col-md-5 d-flex justify-content-center border-start ps-3">
            <strong>Investor</strong>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-6">
            <ul className="list-group">
              {founders.map((founder) => (
                <li
                  key={founder.id}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  <div className="d-flex align-items-center">
                    <img
                      src={founder.avatar || UserImg}
                      alt={founder.name}
                      className="rounded-circle me-3"
                      style={{ width: "40px", height: "40px" }}
                    />
                    {founder.name}
                  </div>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => deleteUser(founder._id, "Founder", founder.name)}
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-md-5 border-start ps-3">
            <ul className="list-group">
              {investors.map((investor) => (
                <li
                  key={investor.id}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  <div className="d-flex align-items-center">
                    <img
                      src={investor.avatar || UserImg}
                      alt={investor.name}
                      className="rounded-circle me-3"
                      style={{ width: "40px", height: "40px" }}
                    />
                    {investor.name}
                  </div>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => deleteUser(investor._id, "Investor", investor.name)}
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardMain;
