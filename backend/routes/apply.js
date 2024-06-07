const express = require("express");
const { createApply, getApply } = require("../controllers/apply");

const applyRouter = express();

applyRouter.post("/create", createApply);
applyRouter.get("/", getApply);

module.exports = applyRouter;
