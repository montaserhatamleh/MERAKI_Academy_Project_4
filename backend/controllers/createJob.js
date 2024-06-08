const createJobModel = require("../models/CreateJob");

//to create job
//createdBy for User
//appliers for CV owner
const createJob = (req, res) => {
  const { jonTitle, salaryRange, location, description } = req.body;
  const { createdBy } = req.token.userId;
  const JobApplication = new createJobModel({
    jonTitle,
    salaryRange,
    location,
    description,
    createdBy,
  });
  JobApplication.save()
    .then((result) => {
      res.status(201).json({
        success: true,
        message: `Job Application created`,
        Application: result,
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
// to get all jobs
const getAllJob = (req, res) => {
  createJobModel
    .find({})
    .then((result) => {
      res.status(201).json({
        success: true,
        message: `Get All Job`,
        AllJob: result,
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
// to Modify job
const updateJob = (req, res) => {
  
};
// to delete my job
const deleteJob = (req, res) => {};

module.exports = {
  createJob,
  getAllJob,
  updateJob,
  deleteJob,
};
