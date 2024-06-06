const mongoose = require("mongoose");

const category = new mongoose.schema({
  categoryName: { type: String },
  categoryJob: {},
  img: { type: String },
});
module.exports = mongoose.model("Category", category);
