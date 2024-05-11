import React, { useState } from "react";
import LoginImg from "../../assets/img/login-img.jpg";
import LoginCSS from "./login.module.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useCookies } from "react-cookie";
import swal from "sweetalert2";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(email);
  console.log(password);
  const navigate = useNavigate();
  const [_, setCookies] = useCookies(["token"]);

  const handleLogin = async () => {
    try {
      const response = await axios.post(`http://localhost:2000/users/login`, {
        email: email,
        password: password,
      });
      const role = response.data.response.user.role;
      console.log("Login successful:", response);
      console.log(response.data);

      if (response.data.error === false) {
        setCookies("token", response.data.response.token);
        if (role === "Investor") {
          navigate("/feed", { replace: true });
        } else if (role === "Admin") {
          navigate("/dashboard", { replace: true });
        } else if (role === "Founder") {
          navigate("/feed", { replace: true });
        }
      } else {
        swal.fire("Error!", response.data.message, "error");
      }
    } catch (error) {
      console.error("Error fetching user details:", error);
      swal.fire("Error!", "An error occurred while logging in", "error");
    }
  };

  return (
    <>
      <div
        className="container-fluid d-flex justify-content-center align-items-center min-vh-100"
        style={{ background: "linear-gradient(to right, #FFFFFF, #FDFD96)" }}
      >
        {/* --------------------- Login Container ------------------------ */}
        <div
          className={`row border ${LoginCSS.rounded5} p-3 bg-white shadow ${LoginCSS.boxArea}`}
        >
          {/* ------------------------- Left Box -------------------------- */}
          <div
            className={`col-md-6 ${LoginCSS.rounded4} d-flex justify-content-center align-items-center flex-column ${LoginCSS.leftBox}`}
            style={{ background: "#a6ad57" }}
          >
            <div className="featured-image mb-3">
              <img
                src={LoginImg}
                className="img-fluid"
                style={{ width: 250 }}
                alt="Login"
              />
            </div>
            <p
              className="text-white fs-2"
              style={{
                fontFamily: '"Courier New", Courier, monospace',
                fontWeight: 600,
              }}
            >
              Be Verified
            </p>
            <small
              className="text-white text-wrap text-center"
              style={{
                width: "17rem",
                fontFamily: '"Courier New", Courier, monospace',
              }}
            >
              Join experienced Designers on this platform.
            </small>
          </div>
          {/* ------------------------- Right Box ------------------------- */}
          <div className={`col-md-6 ${LoginCSS.rightBox}`}>
            <div className="row align-items-center">
              <div className="header-text mb-4">
                <h2>Hello, Again</h2>
                <p>We are happy to have you back.</p>
              </div>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control form-control-lg bg-light fs-6"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="input-group mb-1">
                <input
                  type="password"
                  className="form-control form-control-lg bg-light fs-6"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="input-group mb-5 d-flex justify-content-between">
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="formCheck"
                  />
                  <label
                    htmlFor="formCheck"
                    className="form-check-label text-secondary"
                  >
                    <small>Remember Me</small>
                  </label>
                </div>
                <div className="forgot">
                  <small>
                    <a href="#">Forgot Password?</a>
                  </small>
                </div>
              </div>
              <div className="input-group mb-3">
                <button
                  className={`btn btn-lg btn-secondary fs-6 ${LoginCSS.btnLogin}`}
                  onClick={handleLogin}
                >
                  Login
                </button>
              </div>
              <div className="row">
                <small>
                  Don't have account?
                  <Link to="/register">Sign in here...</Link>
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
