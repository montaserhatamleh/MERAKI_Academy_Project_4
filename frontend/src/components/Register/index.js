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
    <div>
      <header
        className="masthead"
        style={{ backgroundImage: 'url("assets/img/home-bg.jpg")' }}
      >
        <div className="container position-relative px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-7">
              <div className="site-heading">
                <h1>Clean Blog</h1>
                <span className="subheading">Name website</span>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="Container">
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
      </div>
    </div>
  );
};

export default Register;
