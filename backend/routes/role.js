const express = require("express");
const { createRole, getAllRole } = require("../controllers");

const roleRouter = express();

roleRouter.post("/createRole", createRole);
roleRouter.get("/getRole", getAllRole);

module.exports = roleRouter;
