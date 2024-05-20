import React, { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const OTPContainerStyle = {
  width: "100%",
  height: "100dvh",
  position: "fixed",
  zIndex: 5,
  top: 0,
  left: 0,
  backgroundColor: "grey",
};

const OTPModal = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  width: 380,
  height: 300,
};

const RegisterVerify = ({
  name,
  username,
  phone,
  email,
  password,
  role,
  setEnableOTPModal,
  OTP,
}) => {
  const inputOTPRef = useRef();
  const navigate = useNavigate();

  async function verifyOTP(e) {
    e.preventDefault();

    if (OTP != inputOTPRef.current.value) {
      Swal.fire({
        title: "OTP mismatch",
        text: "Seems You haven't received the email",
        icon: "error",
      });
      return;
    }

    try {
      const res = await axios.post("http://localhost:2000/users/register", {
        name,
        username,
        phone,
        email,
        password,
        role,
      });

      if (!res.data.error) {
        Swal.fire("Success!", res.data.message, "success").then(() => {
          setEnableOTPModal(false);
          navigate("/login", { replace: true });
        });
      } else {
        Swal.fire("Error!", res.data.message, "error");
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="d-flex justify-content-center align-items-center position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-75">
      <div
        className="bg-white p-4 rounded position-relative"
        style={{ width: 300 }}
      >
        <button
          type="button"
          className="btn-close position-absolute top-0 end-0 m-3"
          aria-label="Close"
          onClick={() => setEnableOTPModal(false)}
        ></button>
        <form onSubmit={verifyOTP} className="text-center">
          <div className="mb-3">
            <label htmlFor="otp" className="form-label">
              Enter OTP
            </label>
            <input
              type="number"
              className="form-control"
              id="otp"
              ref={inputOTPRef}
              required
            />
          </div>
          <div className="mb-3">
            <p className="text-muted">
              Please enter the OTP sent to your registered mobile number.
            </p>
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Verify
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterVerify;
