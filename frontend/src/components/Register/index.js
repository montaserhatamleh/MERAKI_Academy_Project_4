import React, { useState } from "react";
import axios from "axios";
import "./styles.css";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [country, setCountry] = useState("");
  const [gender, setGender] = useState("");
  const [profile, setProfile] = useState("");
  const navigate = useNavigate();

  const handleRegister = () => {
    axios
      .post("http://localhost:5000/user/register", {
        email,
        userName,
        password,
        phoneNumber,
        country,
        gender,
        profile,
      })
      .then((res) => {
        console.log(res.data);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="registerContainer">
      <input
        type="text"
        placeholder="Username"
        className="registerInput"
        onChange={(e) => setUserName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Email"
        className="registerInput"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Phone Number"
        className="registerInput"
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <input
        type="text"
        placeholder="Country"
        className="registerInput"
        onChange={(e) => setCountry(e.target.value)}
      />
      <input
        type="text"
        placeholder="Gender"
        className="registerInput"
        onChange={(e) => setGender(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="registerInput"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="registerButton" onClick={handleRegister}>
        Register
      </button>
    </div>
  );
};

export default Register;
