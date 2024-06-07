const mongoose = require("mongoose");

const CreateJob = new mongoose.Schema({
  jonTitle: { type: String, required: true },
  pay: { type: Number, required: true },
  location: { type: String, required: true },
  Description: { type: String },
  Company: {},
  apple: {},
  date: { type: Date },
});
 module.exports = mongoose.model("CreateJob", CreateJob);