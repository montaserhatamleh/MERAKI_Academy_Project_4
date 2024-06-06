const express = require("express");
const { createApply, getApply } = require("../controllers/apply");

const applyRouter = express();

applyRouter.post("/createApply", createApply);
applyRouter.get("/getAllApply", getApply);

module.exports = applyRouter;
