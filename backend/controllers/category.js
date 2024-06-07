const categoryModel = require("../models/category");

const cerateCategory = (req, res) => {
  const { categoryName, img } = req.body;
  const category = new categoryModel({
    categoryName,
    img,
  });
  category
    .save()
    .then((result) => {
      res.status(201).json({
        success: true,
        message: `Category has been created`,
        CategoryJop: result,
      });
    })
    .catch((err) => {
      if (!err.category) {
        return res.status(409).json({
          success: false,
          message: `The Category already exists`,
        });
      }
      res.status(500).json({
        success: false,
        message: `Server Error`,
        err: err.message,
      });
    });
};
const getCategory = (req, res) => {};

module.exports = {
  cerateCategory,
  getCategory,
};
