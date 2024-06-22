const { default: mongoose } = require("mongoose");
const applyModel = require("../models/Apply");

const createApply = (req, res) => {
  const { experience, cv, createdAt } = req.body;
  const createdBy = req.token.userId;
  const appliers = new applyModel({
    experience,
    cv,
    createdAt,
    createdBy,
  });
  appliers
    .save()
    .then((result) => {
      res.status(201).json({
        success: true,
        message: `Apply Created`,
        apply: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: `Server Error`,
        err: err.message,
      });
    });
};

const getApply = (req, res) => {
  applyModel
    .find({}).
    populate("createdBy")
    .then((result) => {
      res.status(201).json({
        success: true,
        message: `Get all appliers`,
        appliers: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: `Server Error`,
        err: err.message,
      });
    });
};

module.exports = {
  createApply,
  getApply,
};
