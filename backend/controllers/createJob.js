const { application } = require("express");
const { findById } = require("../models/Apply");
const createJobModel = require("../models/CreateJob");

//appliers for CV
const createJob = (req, res) => {
  const date = new Date("<YYYY-mm-dd>");
  const { jobTitle, salaryRange, location, description } = req.body;
  const createdBy = req.token.userId;
  console.log(req.token);
  const JobApplication = new createJobModel({
    jobTitle,
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
    .populate("createdBy")
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
// to get all employee // appliers
const getApplierById = (req, res) => {
  const userId = req.token.userId;
  createJobModel
    .find({ appliers: userId })
    .then((result) => {
      console.log(result);
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
// get applier by userId
const getAllJobsIApplyFor = (req, res) => {
  const applier = req.params.userId;
  findOne({ applier: "appliers" })
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
// push appliers
const updateJob = (req, res) => {
  const id = req.params.id;
  const { appliers } = req.body;
  createJobModel
    .findByIdAndUpdate(
      { _id: id },
      { $push: { appliers: appliers } },
      { new: true }
    )
    .populate("appliers")
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
  const { id } = req.body;
  console.log(id, "===========applId");
  createJobModel
    .findByIdAndUpdate(
      id,
      { $pull: { appliers: JobApplication } },
      { new: true }
    )
    .then((result) => {
      res.status(200).json({
        success: true,
        message: `Applier Deleted`,
        deleted: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: `Server Error`,
        err: err,
      });
    });
};
const getJobApplicationById = (req, res) => {
  const id = req.params.id;
  const user = req.token.userId;
  createJobModel
    .find({ _id: id, createdBy: user })
    .populate("appliers")
    .then((result) => {
      res.status(201).json({
        success: true,
        message: `Applier added`,
        appliers: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: `Server Error`,
        err: err,
      });
    });
};
//Delete by Id function
const DeleteById = (req, res) => {
  const id = req.params.id;
  createJobModel
    .findByIdAndDelete(id)
    .then((result) => {
      res.status(201).json({
        success: true,
        message: `job Application Deleted`,
        appliers: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: `Server Error`,
        err: err,
      });
    });
};
module.exports = {
  createJob,
  getAllJob,
  updateJob,
  deleteJob,
  getApplierById,
  getAllJobsIApplyFor,
  getJobApplicationById,
  DeleteById,
};
