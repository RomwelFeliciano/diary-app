const User = require("../models/User.model");
const generateToken = require("../utils/generateToken");
const asyncHandler = require("../utils/asyncHandler");

// POST /api/auth/login
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.login(email, password);
  const token = generateToken(user._id);

  res.status(200).json({ email: user.email, token });
});

// POST /api/auth/register
const registerUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.register(email, password);
  const token = generateToken(user._id);

  res.status(201).json({ email: user.email, token });
});

module.exports = { loginUser, registerUser };
