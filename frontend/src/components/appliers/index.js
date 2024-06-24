import axios from "axios";
import { useContext } from "react";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { userContext } from "../../App";
import "./styles.css";

const Applier = () => {
  const { token } = useContext(userContext);
  const navigate = useNavigate();
  const [experience, setExperience] = useState("");
  const [cv, setCv] = useState("");
  const [url, setUrl] = useState("");
  const { id } = useParams();
  const handlePushApplier = (appliersId) => {
    axios
      .put(
        `http://localhost:5000/createJob/accept/${id}`,
        {
          appliers: appliersId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleAppliers = () => {
    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    //create applier
    axios
      .post(
        "http://localhost:5000/apply/create",
        {
          experience,
          cv: url,
        },
        headers
      )
      .then((res) => {
        console.log(res.data.apply._id);
        //state to save Id
        handlePushApplier(res.data.apply._id);
        // navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
      });
    //push applier

    const uploadImage = () => {
      const data = new FormData();
      data.append("file", cv);
      data.append("upload_preset", "ghrgo4ap");
      data.append("cloud_name", "dk50zfxtr");
      fetch("https://api.cloudinary.com/v1_1/dk50zfxtr/image/upload", {
        method: "post",
        body: data,
      })
        .then((resp) => resp.json())
        .then((data) => {
          console.log(data.url);
          setUrl(data.url);
        })
        .catch((err) => console.log(err));
    };
    uploadImage();
  };
  return (
    <div>
      <header
        className="masthead"
        style={{ backgroundImage: 'url("https://guangzhouinsider.info/wp-content/uploads/2024/03/annie-spratt-qyAka7W5uMY-unsplash.jpg")' }}
      >
        <div className="container position-relative px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-7">
              <div className="site-heading">
                <h1>Dream come true</h1>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="Container">
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
              className="applierInput"
              type="file"
              onChange={(e) => setCv(e.target.files[0])}
            ></input>
            <button className="applierButton" onClick={handleAppliers}>
              Submit Application
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Applier;
