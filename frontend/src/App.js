import React, { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import Nav from "./components/Navbar/index";
import Register from "./components/Register";
import Login from "./components/Login";
export const userContext = createContext();
const App = () => {
  const [token, setToken] = useState(localStorage.getItem("Token") || null);
  return (
    <div className="App">
      <userContext.Provider value={{token, setToken}}>
        <Nav />
        <Routes>
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </userContext.Provider>
    </div>
  );
};

export default App;
