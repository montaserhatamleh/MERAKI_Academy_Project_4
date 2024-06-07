const express = require("express");
const cors = require("cors");
require("dotenv").config();
require("./models/db");

const app = express();
const PORT = process.env.PORT || 5000;

const applyRouter = require("./routes/apply");
const categoryRouter = require("./routes/category");
const createJobRouter = require("./routes/createJob");
const roleRouter = require("./routes/role");
const userRouter = require("./routes/user");

app.use(cors());
app.use(express.json());

// Handles any other endpoints [unassigned - endpoints]

//Routes middleware
app.use("/apply", applyRouter);
app.use("/category", categoryRouter);
app.use("/createJob", createJobRouter);
app.use("/role", roleRouter);
app.use("/user", userRouter);

app.use("*", (req, res) => res.status(404).json("NO content at this path"));

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
