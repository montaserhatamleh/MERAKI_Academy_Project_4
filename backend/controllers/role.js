const roleModel = require("../models/role");

const createRole = (req, res) => {
  const { role, permission } = req.body;
  const newUser = new roleModel({ role, permission });
    newUser
    .save()
    .then((result) => {
      res.status(201).json({
        success: true,
        message: `Role created`,
        role: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: `Server Error`,
        err: err.message,
      });
    });
};
const getAllRole = (req, res) => {};

module.exports = {
  createRole,
  getAllRole,
};
