import LoginImg from "../../assets/img/login-img.jpg";
import LoginCSS from "./login.module.css";
import { Link } from "react-router-dom";
import Footer from "../../inc/Footer";
import { useState } from "react";
import axios from "axios";
import swal from "sweetalert2";
import RegisterVerify from "./registerVerify";

function Register() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");

  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [OTP, setOTP] = useState(0);
  const [password, setPassword] = useState("");
  const [enableOTPModal, setEnableOTPModal] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("");

  const handleUsername = async (e) => {
    e.preventDefault();
    const usernameInput = e.target.value.trim();
    const usernameSpan = document.getElementById("username");

    // Clear the previous message
    usernameSpan.innerHTML = "";
    usernameSpan.style.color = ""; // Reset the color

    // Check if the username length is more than 5
    if (usernameInput.length <= 5) {
      usernameSpan.innerHTML = "Username must be at least 6 characters long";
      usernameSpan.style.color = "red"; // Set text color to red
      return; // Exit the function
    }

    try {
      const res = await axios.post("http://localhost:2000/users/username", {
        username: usernameInput,
      });
      console.log(res);
      if (!res.data.error) {
        usernameSpan.innerHTML = res.data.message;
        usernameSpan.style.color = "green"; // Set text color to green
      } else {
        usernameSpan.innerHTML = res.data.message;
        usernameSpan.style.color = "red"; // Set text color to red
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handlePasswordValidation = (e) => {
    const passwordInput = e.target.value;
    const passwordSpan = document.getElementById("password");
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

    // Clear the previous message
    passwordSpan.innerHTML = "";
    passwordSpan.style.color = "";

    // Check if the password meets the requirements
    if (!passwordRegex.test(passwordInput)) {
      passwordSpan.innerHTML =
        "Password must be at least 6 characters long and contain at least one uppercase, one lowercase, one numeric, and one special character";
      passwordSpan.style.color = "red";
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setEnableOTPModal(true);
    const otp = parseInt(Math.random() * 8);
    setOTP(otp);
    await axios.post("http://localhost:5000/send_email_OTP", {
      OTP: otp,
      email,
    });
  };
  return (
    <>
      {enableOTPModal && (
        <RegisterVerify
          name={name}
          OTP={OTP}
          username={username}
          role={role}
          phone={phone}
          setEnableOTPModal={setEnableOTPModal}
          password={password}
          email={email}
        />
      )}
      <div
        className="container-fluid d-flex justify-content-center align-items-center min-vh-100"
        style={{ background: "linear-gradient(to right, #FFFFFF, #FDFD96)" }}
      >
        <div
          className={`row my-5 border ${LoginCSS.rounded5} p-3 bg-white shadow ${LoginCSS.boxArea}`}
        >
          <div
            className={`col-md-6 ${LoginCSS.rounded4} d-flex justify-content-center align-items-center flex-column ${LoginCSS.leftBox}`}
            style={{ background: "#a6ad57" }}
          >
            <div className="featured-image mb-3">
              <img
                src={LoginImg}
                className="img-fluid"
                style={{ width: 250 }}
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

          <div className={`col-md-6 ${LoginCSS.rightBox}`}>
            <div className="row align-items-center">
              <div className="header-text mb-4">
                <h2>Hello, Welcome to FundWise</h2>
                <p>We are happy to have you here.</p>
              </div>

              {/* form */}

              <form className="" onSubmit={handleSubmit}>
                <label htmlFor="validationDefault01" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="validationDefault01"
                  placeholder="Name..."
                  value={name}
                  required
                  onChange={(e) => setName(e.target.value)}
                />
                <label htmlFor="validationDefault01" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="validationDefault01"
                  placeholder="Name..."
                  value={username}
                  required
                  onChange={(e) => {
                    setUsername(e.target.value);
                    handleUsername(e);
                  }}
                />
                <span>
                  <small id="username"> </small>
                </span>
                <br />

                <label htmlFor="validationDefault04" className="form-label">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="validationDefault03"
                  placeholder="0123456789"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
                <label htmlFor="validationDefault04" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="validationDefault03"
                  placeholder="abc@gamil.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />

                <label className="form-label">You are a</label>
                <div className="d-flex">
                  <div className="form-check me-3">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="role"
                      id="roleFounder"
                      value="Founder"
                      checked={role === "Founder"}
                      onChange={(e) => setRole(e.target.value)}
                    />
                    <label className="form-check-label" htmlFor="roleFounder">
                      Founder
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="role"
                      id="roleInvestor"
                      value="Investor"
                      checked={role === "Investor"}
                      onChange={(e) => setRole(e.target.value)}
                    />
                    <label className="form-check-label" htmlFor="roleInvestor">
                      Investor
                    </label>
                  </div>
                </div>

                <input
                  type="password"
                  className="form-control"
                  id="validationDefault05"
                  placeholder="Password@123..."
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    handlePasswordValidation(e);
                  }}
                  required
                />
                <span>
                  <small id="password"></small>
                </span>
                <label htmlFor="validationDefault05" className="form-label">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="validationDefault05"
                  placeholder="Password@123..."
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />

                <br />
                <button
                  className={`btn btn-lg btn-secondary fs-6 ${LoginCSS.btnLogin}`}
                >
                  Sign Up
                </button>
                <br />
                <small>
                  <p>
                    Already have an account?{" "}
                    <Link to="/login">Login here...</Link>
                  </p>
                </small>
                <div className="col-6">{/* <p>{errMsg}</p> */}</div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Register;
