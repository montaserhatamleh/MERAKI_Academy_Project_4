import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { userContext } from "../../App";
import "./styles.css";

const CreatingJobApplications = () => {
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
      .post(
        "http://localhost:5000/createJob/create",
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
    <div>
      <header
        className="masthead"
        style={{ backgroundImage: 'url("assets/img/about-bg.jPg")' }}
      >
        <div className="container position-relative px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-7">
              <div className="site-heading">
                <h1>Envision</h1>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="Container">
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
          <button className="jobApplicationsButton" onClick={jobApplications}>
            Create Job
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatingJobApplications;
