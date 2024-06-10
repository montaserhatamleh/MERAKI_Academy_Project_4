const express = require("express");
const {
  createJob,
  getAllJob,
  updateJob,
  deleteJob,
  getApplierById,
  getAllJobsIApplyFor,
} = require("../controllers/createJob");
const authentication = require ('../middleware/authentication')
const createJobRouter = express.Router();

createJobRouter.post("/create",authentication ,createJob);
createJobRouter.get("/", getAllJob);
createJobRouter.get("/getApplier",authentication,getApplierById)
createJobRouter.get("/iApplyFor/:id",authentication,getAllJobsIApplyFor )
createJobRouter.put("/:id",authentication, updateJob);
createJobRouter.put("/deleteApplier/:id",authentication, deleteJob);

module.exports = createJobRouter;
