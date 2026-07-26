const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const SALT_ROUNDS = 10;

const httpError = (message, statusCode) => {
  const error = new Error(message);
  error.statusCode = statusCode;
  return error;
};

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

// Static login method - validates credentials and returns the matching user
userSchema.statics.login = async function (email, password) {
  if (!email || !password) {
    throw httpError("All fields must be filled", 400);
  }
  if (!validator.isEmail(email)) {
    throw httpError("Email is not valid", 400);
  }

  const user = await this.findOne({ email });
  if (!user) {
    throw httpError("Incorrect email", 401);
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw httpError("Incorrect password", 401);
  }

  return user;
};

// Static register method - validates input and creates a new user with a hashed password
userSchema.statics.register = async function (email, password) {
  if (!email || !password) {
    throw httpError("All fields must be filled", 400);
  }
  if (!validator.isEmail(email)) {
    throw httpError("Email is not valid", 400);
  }
  if (!validator.isStrongPassword(password)) {
    throw httpError("Password is not strong enough", 400);
  }

  const exists = await this.findOne({ email });
  if (exists) {
    throw httpError("Email is already in use", 409);
  }

  const salt = await bcrypt.genSalt(SALT_ROUNDS);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({ email, password: hash });
  return user;
};

const User = mongoose.model("User", userSchema);

module.exports = User;
