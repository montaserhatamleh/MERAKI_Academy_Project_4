import axios from "axios";
import { React, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function Header() {
  const Navigate = useNavigate();
  const [jobApplication, setJobApplication] = useState([]);
  

  const showingItem = () => {
    axios
      .get("http://localhost:5000/createJob/")
      .then((res) => {
        // console.log(res.data.AllJob);
        setJobApplication(res.data.AllJob);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    showingItem();
  }, []);

  const handelAppliers = () => {
    Navigator 
  };

  const Search = () => {

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
                    type="test"
                    placeholder="Search"
                    className="SearchBar"
                  ></input>
                </div>
                <a>
                  <h2 className="post-title">
                    <div>
                      {jobApplication.map((elem, i) => {
                        return (
                          <div className="post-preview" key={i}>
                            <a>
                              <h2>{elem.createdBy}</h2>
                              <h2 className="post-title">{elem.jobTitle}</h2>
                            </a>
                            <p className="post-meta">
                              salaryRange {elem.salaryRange}
                            </p>
                            <h4>{elem.location}</h4>
                            <h6>{elem.description}</h6>
                            <h6>{elem.ceratedAt}</h6>
                            <button className="btn btn-primary text-uppercase">
                              Apply
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  </h2>
                </a>
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
}

export default Header;
