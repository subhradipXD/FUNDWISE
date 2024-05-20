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
    <div style={OTPContainerStyle}>
      <button onClick={() => setEnableOTPModal(false)}></button>
      <form onSubmit={verifyOTP} style={OTPModal}>
        <input type="number" ref={inputOTPRef} />
        <input type="submit" />
      </form>
    </div>
  );
};

export default RegisterVerify;
