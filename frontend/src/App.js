import React, { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import Header from "./components/Home";
import Nav from "./components/Navbar/index";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Applier from "./components/Appliers";

export const userContext = createContext();
const App = () => {
  const [token, setToken] = useState(localStorage.getItem("Token") || null);
  return (
    <div className="App">
      <userContext.Provider value={{ token, setToken }}>
        <Nav />
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/applier" element={<Applier />} />
        </Routes>
        <Footer />
      </userContext.Provider>
    </div>
  );
};

export default App;
