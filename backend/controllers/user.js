const userModel = require("../models/users");

const register = (req, res) => {
  const {
    userName,
    email,
    password,
    phoneNumber,
    profile,
    Country,
    gender,
    birthDate,
    role,
  } = req.body;
  const newUser = new userModel({
    userName,
    email,
    password,
    phoneNumber,
    profile,
    Country,
    gender,
    birthDate,
    role: "6662f5538af98d42b47e0860",
  });
  newUser
    .save()
    .then((result) => {
      res.status(201).json({
        success: true,
        message: `User Created`,
        user: result,
      });
    })
    .catch((err) => {

   if (!err.email) {
        return res.status(409).json({
          success: false,
          message: `The email already exists`,
        });
      }
      res.status(500).json({
        success: false,
        message: `Server Error`,
        err: err.message,
      });
    });
};

const login = (req, res) => {};

module.exports = {
  register,
  login,
};
