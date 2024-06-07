const userModel = require("../models/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

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
    role: "66633e340629bd900ac51ab2",
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

const login = (req, res) => {
  const password = req.body.password;
  const email = req.body.email.toLowerCase();
  userModel
    .findOne({ email })
    .populate("role", "-_id -__v")
    .then(async (result) => {
      if (!result) {
        return res.status(403).json({
          success: false,
          message: `The email doesn't exist or The password you’ve entered is incorrect`,
        });
      }
      try {
        const isValid = await bcrypt.compare(password, result.password);
        if (!isValid) {
          return res.status(403).json({
            success: false,
            message: `The email doesn't exist or The password you’ve entered is incorrect`,
          });
        }
        const payload = {
          userId: result._id,
          userName: result.userName,
          role: result.role,
        };
        const options = {
          expiresIn: "300m",
        };
        const token = jwt.sign(payload, process.env.SECRET, options);
        res.status(200).json({
          success: true,
          message: `Valid login credentials`,
          token: token,
        });
      } catch (error) {
        throw new Error(error.message);
      }
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
    register,
    login,
  };
  
 