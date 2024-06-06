const mongoose = require("mongoose");

const apply = new mongoose.Schema({
  experience: { type: String, require: true },
  employee: { id },
  cv: { type: String, required: true },
  date: { type: Date },
});

module.exports = mongoose.model("Apply", apply);
