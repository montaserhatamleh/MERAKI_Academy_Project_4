const express = require("express");
const { cerateCategory, getCategory } = require("../controllers/category");

const categoryRouter = express();

categoryRouter.post("/cerateCategory");
categoryRouter.get("/getCategory");

module.exports = categoryRouter;
