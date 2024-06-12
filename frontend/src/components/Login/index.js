import React, { useContext } from "react";
import { useState, createContext } from "react";
import { userContext } from "../../App";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setToken } = useContext(userContext);
  const Navigate = useNavigate();

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
        Navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      ></input>
      <input
        type="text"
        placeholder="Password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      ></input>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
