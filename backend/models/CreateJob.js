const mongoose = require("mongoose");

const JobApplication = new mongoose.Schema({
  jobTitle: { type: String, required: true },
  salaryRange: { type: Number, required: true },
  location: { type: String, required: true },
  description: { type: String },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref:"User"},
  appliers: [{ type: mongoose.Schema.Types.ObjectId,ref:"Apply"}],
  ceratedAt: { type: Date, default: Date.now, index: true  },
});
module.exports = mongoose.model("JobApplication", JobApplication);
