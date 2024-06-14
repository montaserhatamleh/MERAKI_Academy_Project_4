const express = require("express");
const { createApply, getApply } = require("../controllers/apply");

const applyRouter = express.Router();
const authentication = require("../middleware/authentication");

applyRouter.post("/create",authentication, createApply);
applyRouter.get("/getRequests", getApply);

module.exports = applyRouter;
