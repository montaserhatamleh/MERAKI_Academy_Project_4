const express = require("express");
const { createRole, getAllRole } = require("../controllers/role");

const roleRouter = express();

roleRouter.post("/create", createRole);
roleRouter.get("/", getAllRole);

module.exports = roleRouter;
