import React, { useContext, useState } from "react";
import { userContext } from "../../App";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./styles.css"; 

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setToken } = useContext(userContext);
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
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
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
    </div>
  );
}

export default Login;