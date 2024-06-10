const { findById } = require("../models/Apply");
const createJobModel = require("../models/CreateJob");

//to create job
//createdBy for User
//appliers for CV owner
const createJob = (req, res) => {
  const { jonTitle, salaryRange, location, description } = req.body;
  const createdBy = req.token.userId;
  console.log(req.token);
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
// to get all employee
const getApplierById = (req, res) => {
  const userId = req.token.userId;
 
};
const getAllJobsIApplyFor = (req, res) => {};
// to push applier to Job Application
const updateJob = (req, res) => {
  const id = req.params.id;
  createJobModel
    .findByIdAndUpdate(
      { _id: id },
      { $push: { appliers: req.token.userId } },
      { new: true }
    )

    .then((result) => {
      res.status(201).json({
        success: true,
        message: `Applier added`,
        appliers: result,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        success: false,
        message: `Server Error`,
        err: err.message,
      });
    });
};
// to delete my job
const deleteJob = (req, res) => {
  const JobApplication = req.params.id;
  createJobModel
    .deleteMany({ appliers: JobApplication })
    .then((result) => {
      if (!result.deletedCount) {
        return res.status(404).json({
          success: false,
          message: `The applier not found`,
        });
      }
      res.status(200).json({
        success: true,
        message: `Delete The applier`,
        deleted: result,
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
// adding Delete all function
module.exports = {
  createJob,
  getAllJob,
  updateJob,
  deleteJob,
  getApplierById,
  getAllJobsIApplyFor,
};
