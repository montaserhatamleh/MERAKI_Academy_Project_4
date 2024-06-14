import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { userContext } from "../../App";
import "./styles.css";

function CreatingJobApplications() {
  const { token } = useContext(userContext);
  const [jobTitle, setJobTitle] = useState("");
  const [salaryRange, setSalaryRange] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const jobApplications = () => {
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    axios
      .post("http://localhost:5000/createJob/create",
        {
          jobTitle,
          salaryRange,
          location,
          description,
        },
        { headers }
      )
      .then((res) => {
        console.log(res.data);

        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="jobApplicationsContainer">
      <input
        type="text"
        placeholder="Job Title"
         className="jobApplicationsInput"
        onChange={(e) => setJobTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Salary Range"
         className="jobApplicationsInput"
        onChange={(e) => setSalaryRange(e.target.value)}
      />
      <input
        type="text"
        placeholder="Location"
         className="jobApplicationsInput"
        onChange={(e) => setLocation(e.target.value)}
      />
      <textarea
        placeholder="Description"
         className="jobApplicationsInput"
        onChange={(e) => setDescription(e.target.value)}
      />
      <button className="jobApplicationsButton" onClick={jobApplications}>Create Job</button>
    </div>
  );
}

export default CreatingJobApplications;
