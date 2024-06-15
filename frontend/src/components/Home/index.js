import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

const Header = () => {
  const navigate = useNavigate();
  const [jobApplications, setJobApplications] = useState([]);
  const [filteredApplications, setFilteredApplications] = useState([]);
  const [search, setSearch] = useState("");

  const fetchJobApplications = () => {
    axios
      .get("http://localhost:5000/createJob/")
      .then((res) => {
        // setJobApplications(res.data.AllJob);
        setJobApplications(
          res.data.AllJob.sort(
            (a, b) => new Date(b.ceratedAt) - new Date(a.ceratedAt)
          )
        );
        setFilteredApplications(res.data.AllJob);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchJobApplications();
  }, []);

  useEffect(() => {
    const onSearch = jobApplications.filter((elem) => {
      return elem.jobTitle.toLowerCase().includes(search.toLowerCase());
    });
    setFilteredApplications(onSearch);
  }, [search, jobApplications]);

  const handleAppliers = () => {
    navigate("/applier");
  };
  const filterByLocation = () => {
    // console.log(filterByLocation);
    setJobApplications(jobApplications.sort((a, b) => a.location - b.location));
  };

  return (
    <>
      <div>
        {/* Page Header*/}
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
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-7">
              {/* Post preview*/}
              <div className="post-preview">
                <div>
                  <input
                    type="text"
                    placeholder="Search..."
                    className="SearchBar"
                    onChange={(e) => {
                      setSearch(e.target.value);
                    }}
                  />
                </div>
                <div>
                  <button
                    className="btn btn-primary text-uppercase"
                    onClick={filterByLocation}
                  >
                    location
                  </button>
                  <button className="btn btn-primary text-uppercase">
                    Date
                  </button>
                  <button className="btn btn-primary text-uppercase">
                    salary Range
                  </button>
                </div>
                <div>
                  {filteredApplications.map((elem, i) => (
                    <div className="job-application-container" key={i}>
                      <a>
                        <h2>{elem.createdBy.userName}</h2>
                        <h2 className="post-title">{elem.jobTitle}</h2>
                      </a>
                      <p className="post-meta">
                        Salary Range: {elem.salaryRange}
                      </p>
                      <h4>{elem.location}</h4>
                      <h6>{elem.description}</h6>
                      <h6>{elem.ceratedAt}</h6>
                      <button
                        className="btn btn-primary text-uppercase"
                        onClick={handleAppliers}
                      >
                        Apply
                      </button>
                    </div>
                  ))}
                </div>
              </div>
              <div className="d-flex justify-content-end mb-4">
                <a className="btn btn-primary text-uppercase" href="#!">
                  Older Posts →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
