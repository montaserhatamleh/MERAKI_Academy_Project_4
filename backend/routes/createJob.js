const express = require("express");
const {
  createJob,
  getAllJob,
  updateJob,
  deleteJob,
} = require("../controllers/createJob");
const createJobRouter = express.Router();

createJobRouter.post("/create", createJob);
createJobRouter.get("/", getAllJob);
createJobRouter.put("/:id", updateJob);
createJobRouter.delete("/:id", deleteJob);

module.exports = createJobRouter;
