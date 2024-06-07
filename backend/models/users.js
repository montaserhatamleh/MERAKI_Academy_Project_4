const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const user = new mongoose.Schema({
  userName: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  phoneNumber: { type: Number },
  profile: { type: String },
  role: { type: mongoose.Schema.Types.ObjectId, ref: "Role" },
  Country: { type: String },
  gender: { type: String },
  birthDate: { type: Date },
});

module.exports = mongoose.model("User", user);
