import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { userContext } from "../../App";
import "./styles.css";

function AcceptApplying() {
  //get appliers
  //accept appliers
  //delete appliers
  const [request, setRequest] = useState([]);
  const fetchRequests = () => {
    axios
      .get("http://localhost:5000/apply/getRequests")
      .then((res) => {
        setRequest(res.data.appliers);
        
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    fetchRequests();
  }, []);
  return (
    <div>
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
                {request.map((elem,i)=>(
                    <div key={i} className="applier">
                        <h3>{elem.createdBy}</h3>
                        <p>{elem.experience}</p>
                        <button>onClick</button>
                        <button>onClick</button>
                    </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AcceptApplying;
