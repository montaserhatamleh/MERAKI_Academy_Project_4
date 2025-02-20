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
import CreatingJobApplications from "./components/jobApplications";
import AcceptApplying from "./components/AcceptApplying";

export const userContext = createContext();
const App = () => {
  const [token, setToken] = useState(localStorage.getItem("Token") || null);
  const [user_Id, setUser_Id] = useState(
    localStorage.getItem("user_Id") || null
  );
  const [loggedIn, setLoggedIn] = useState(
    localStorage.getItem("loggedIn") || false
  );

  return (
    <div className="App">
      <userContext.Provider
        value={{ token, setToken, loggedIn, setLoggedIn, user_Id, setUser_Id }}
      >
        <Nav />
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/applier/:id" element={<Applier />} />
          <Route
            path="/CreatingJobApplications"
            element={<CreatingJobApplications />}
          />
          <Route path="/AcceptApplying/:id" element={<AcceptApplying />} />
        </Routes>
        <Footer />
      </userContext.Provider>
    </div>
  );
};

export default App;
