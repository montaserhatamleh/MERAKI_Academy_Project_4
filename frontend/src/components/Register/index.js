import React from "react";
import { useState, useEffect} from "react";
import axios from "axios"

function Register() {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [Country, setCountry] = useState("");
  const [gender, setGender] = useState("");
  const [profile, setProfile] = useState("");

  return (
    <div>
      <input
        type="test"
        placeholder="UserName"
        onChange={(e) => {
          setUserName(e.target.value);
        }}
      />
      <input
        type="test"
        placeholder="Email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        type="test"
        placeholder="PhoneNumber"
        onChange={(e) => {
          setPhoneNumber(e.target.value);
        }}
      />
      <input
        type="test"
        placeholder="Country"
        onChange={(e) => {
          setCountry(e.target.value);
        }}
      />
      <input
        type="test"
        placeholder="Gender"
        onChange={(e) => {
          setGender(e.target.value);
        }}
      />
      <input
        type="test"
        placeholder="Password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button onClick={() => {
        axios.post("http://localhost:5000/user/register",{
          email,
          userName,
          password,
          phoneNumber,
          Country,
          gender,
          profile,
        })
        .then((res)=>{
          console.log(res.data);
        })
        .catch((err)=>{
          console.log(err);
        })
      }} >register</button>
    </div>
  );
}

export default Register;
