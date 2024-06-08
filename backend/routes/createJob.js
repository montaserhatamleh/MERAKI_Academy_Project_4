const express = require("express");
const {
  createJob,
  getAllJob,
  updateJob,
  deleteJob,
} = require("../controllers/createJob");
const authentication = require ('../middleware/authentication')
const createJobRouter = express.Router();

createJobRouter.post("/create",authentication ,createJob);
createJobRouter.get("/", getAllJob);
createJobRouter.put("/:id",authentication, updateJob);
createJobRouter.delete("/:id",authentication, deleteJob);

module.exports = createJobRouter;
