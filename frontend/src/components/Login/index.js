import React, { useContext, useState } from "react";
import { userContext } from "../../App";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import "./styles.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setToken, setLoggedIn, loggedIn, setUser_Id } =
    useContext(userContext);
  const navigate = useNavigate();
  const handleLogin = () => {
    axios
      .post("http://localhost:5000/user/login", {
        email,
        password,
      })
      .then((res) => {
        console.log(res.data);
        const token = res.data.token;
        setToken(token);
        localStorage.setItem("Token", token);
        setLoggedIn(true);
        localStorage.setItem("loggedIn", true);
        setUser_Id(res.data.userId);
        localStorage.setItem("user_Id", res.data.userId);
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
        style={{ backgroundImage: 'url("assets/img/post-bg.jpg")' }}
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
        <div className="loginContainer">
          <input
            type="text"
            placeholder="Email"
            className="loginInput"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="loginInput"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="loginButton" onClick={handleLogin}>
            Login
          </button>
          <span className="google-button">
            {" "}
            
            <GoogleLogin
              onSuccess={(credentialResponse) => {
                const decoded = jwtDecode(credentialResponse?.credential);
                console.log(decoded);
                axios
                .post("http://localhost:5000/user/login", {
                  email:decoded.email,
                  password:"1234",
                })
                .then((res) => {
                  console.log(res.data);
                  const token = res.data.token;
                  setToken(token);
                  localStorage.setItem("Token", token);
                  setLoggedIn(true);
                  localStorage.setItem("loggedIn", true);
                  setUser_Id(res.data.userId);
                  localStorage.setItem("user_Id", res.data.userId);
                  navigate("/");
                })
                .catch((err) => {
                  console.log(err);
                });
                navigate("/");
              }}
              onError={() => {
                console.log("Login Failed");
              }}
            />
            
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
