const mongoose = require("mongoose");

const category = new mongoose.Schema({
  categoryName: { type: String },
  img: { type: String },
});
module.exports = mongoose.model("Category", category);
