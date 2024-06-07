const mongoose = require("mongoose");

const category = new mongoose.Schema({
  categoryName: { type: String },
  categoryJob: {},
  img: { type: String },
});
module.exports = mongoose.model("Category", category);
