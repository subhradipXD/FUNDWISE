import LoginImg from "../../assets/img/login-img.jpg";
import LoginCSS from "./login.module.css";
import { Link } from "react-router-dom";
import Footer from "../../inc/Footer";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const [name, setName]=useState("")
  const [phone, setPhone]=useState("")
  const [email, setEmail]=useState("")
  const [password, setPassword]=useState("")
  const [confirmPassword , setConfirmPassword]=useState("")
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      
        const res = await axios.post("http://localhost:2000/users/register", {
          name,
          phone,
          email,
          password,
         role:"Investor"
        });

        if (!res.data.error) {
          navigate("/login", { replace: true });
        }

      } catch (err) {
        console.log(err);
  
    }
    //  finally {
    //   setLoading(false);
    // }
  };
  return (
    <>
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

              <form
                className=""
                 onSubmit={handleSubmit}
              >
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

                <label htmlFor="validationDefault05" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="validationDefault05"
                  placeholder="Password@123..."
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
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
                <button className={`btn btn-lg btn-secondary fs-6 ${LoginCSS.btnLogin}`}>
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
