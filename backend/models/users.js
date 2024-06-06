const mongoose = require("mongoose");

const user = new mongoose.Schema({
  userName: { type: String, required: true },
  email: { type: String, unique: true },
  password: { type: String, required: true },
  phoneNumber: { type: Number },
  profile: { URL },
  role: {},
  Country: { type: String },
  gender: { type: String },
  birthDate: { type: Date },
});

module.exports = mongoose.module("User", user);
