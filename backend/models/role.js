const mongoose = require("mongoose");

const role = new mongoose.Schema({
  role: { type: String },
  permission:[ { type: String }],
});
module.exports = mongoose.model("Role", role);
