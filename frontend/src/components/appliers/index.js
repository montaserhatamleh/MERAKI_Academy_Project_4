import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css"; 

function Applier() {
  const navigate = useNavigate();
  const [experience, setExperience] = useState("");
  const [cv, setCv] = useState("");

  const handleAppliers = () => {
    axios
      .post("http://localhost:5000/apply/create", {
        experience,
        cv,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="applierContainer">
      <div className="applierHeader">
        <h1>Apply Now</h1>
      </div>
      <div className="applierContent">
        <input
          type="text"
          placeholder="Your Experience"
          className="applierInput"
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
        />
        <input
          type="text"
          placeholder="Your CV"
          className="applierInput"
          value={cv}
          onChange={(e) => setCv(e.target.value)}
        />
        <button
          className="applierButton"
          onClick={handleAppliers}
        >
          Submit Application
        </button>
      </div>
    </div>
  );
}

export default Applier;