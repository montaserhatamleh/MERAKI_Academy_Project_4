const roleModel = require("../models/role");

const createRole = (req, res) => {
  const { role, permission } = req.body;
  const newRole = new roleModel({ role, permission });
  newRole
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

module.exports = {
  createRole,
};
