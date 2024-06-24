const express = require("express");
const {
  createJob,
  getAllJob,
  updateJob,
  deleteJob,
  getApplierById,
  getAllJobsIApplyFor,
  getJobApplicationById,
} = require("../controllers/createJob");
const authentication = require("../middleware/authentication");
const authorization = require("../middleware/authorization");
const createJobRouter = express.Router();

createJobRouter.post("/create", authentication, createJob);
createJobRouter.get("/", getAllJob);
createJobRouter.get("/getApplier", authentication, getApplierById);
createJobRouter.get("/iApplyFor/:id", authentication, getAllJobsIApplyFor);
createJobRouter.put("/accept/:id", authentication, updateJob);
createJobRouter.put("/deleteApplier/:id", authentication, deleteJob);
createJobRouter.get("/getJobAppById/:id", getJobApplicationById);

module.exports = createJobRouter;
