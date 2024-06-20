const mongoose = require("mongoose");

const JobApplicationReplies = new mongoose.Schema({
  experience: { type: String, require: true },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  cv: { type: String, required: true },
  createdAt: { type: Date, default: Date.now, index: true },
  //img
});

module.exports = mongoose.model("Apply", JobApplicationReplies);
