const express = require("express");
const { cerateCategory, getCategory } = require("../controllers/category");

const categoryRouter = express();

categoryRouter.post("/cerate");
categoryRouter.get("/");

module.exports = categoryRouter;
