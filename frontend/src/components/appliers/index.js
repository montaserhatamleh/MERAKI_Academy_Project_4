import axios from "axios";
import { useContext } from "react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../../App";
import "./styles.css";

const Applier = () => {
  const { token } = useContext(userContext);
  const navigate = useNavigate();
  const [experience, setExperience] = useState("");
  const [cv, setCv] = useState("");
  const [url, setUrl] = useState("");

  const handleAppliers = () => {
    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
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
        console.log(res.data);
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
      });

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

  // const push = (id) => {
  //   const headers = {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   };
  //   axios
  //   .put(`http://localhost:5000/createJob/accept/${id}`,{
  //     headers
  //   })
  //   .then((res)=>{
  //     console.log(res.data);
  //   })
  //   .catch((err)=>{
  //     console.log(err.message);
  //   })
  // };

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
