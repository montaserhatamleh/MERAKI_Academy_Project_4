import axios from "axios";
import React, { useState } from "react";

function Applier() {
  const [experience, setExperience] = useState("");
  const [cv, setCv] = useState("");
  const fetchApply = () => {
    axios.post("http://localhost:5000/apply/create",{
        experience,
        cv,
    })
    .then((res)=>{
        applies(res.data.applies)
    })
    .catch((err)=>{
        console.log(err);
    })
  };
  return <div></div>;
}

export default Applier;
