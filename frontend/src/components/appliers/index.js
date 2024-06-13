import axios from "axios";
import { useContext } from "react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../../App";
import "./styles.css";

function Applier() {
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
      })
      .catch((err) => {
        console.log(err);
      });
  };
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
        {/* <input
          type="text"
          placeholder="Your CV"
          className="applierInput"
          value={cv}
          onChange={(e) => setCv(e.target.value)}
        /> */}
        <input
          className="input"
          type="file"
          onChange={(e) => setCv(e.target.files[0])}
        ></input>
        <button className="uploadImage" onClick={uploadImage}>
          Upload Image
        </button>
        <button className="applierButton" onClick={handleAppliers}>
          Submit Application
        </button>
      </div>
    </div>
  );
}

export default Applier;
