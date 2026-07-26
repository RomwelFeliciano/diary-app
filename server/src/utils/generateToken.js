const jwt = require("jsonwebtoken");
const env = require("../config/env");

const generateToken = (userId) => {
  return jwt.sign({ _id: userId }, env.jwtSecret, {
    expiresIn: env.jwtExpiresIn,
  });
};

module.exports = generateToken;
