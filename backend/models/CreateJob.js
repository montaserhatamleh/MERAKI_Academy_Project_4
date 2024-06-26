const mongoose = require("mongoose");
const dateTest = ()=>{
  const date = new Date()
  const year = date.getFullYear()
  const month = String(date.getMonth()+1)
  const day = String(date.getDay())

  return `${year}-${month}-${day}`
}

const JobApplication = new mongoose.Schema({
  jobTitle: { type: String, required: true },
  salaryRange: { type: Number, required: true },
  location: { type: String, required: true },
  description: { type: String },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref:"User"},
  appliers: [{ type: mongoose.Schema.Types.ObjectId,ref:"Apply"}],
  ceratedAt: { type: String, default: dateTest, index: true  },
});
module.exports = mongoose.model("JobApplication", JobApplication);
