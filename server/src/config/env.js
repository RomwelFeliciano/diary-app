const path = require("path");

require("dotenv").config({
  path: path.resolve(__dirname, "../../.env.local"),
});

const required = ["MONGO_URI", "JWT_SECRET"];

const missing = required.filter((key) => !process.env[key]);

if (missing.length > 0) {
  throw new Error(
    `Missing required environment variable(s): ${missing.join(", ")}. Check server/.env.local`,
  );
}

const env = {
  port: process.env.PORT || 5001,
  mongoUri: process.env.MONGO_URI,
  jwtSecret: process.env.JWT_SECRET,
  jwtExpiresIn: process.env.JWT_EXPIRES_IN || "3d",
  clientOrigin: process.env.CLIENT_ORIGIN || "http://localhost:3000",
  nodeEnv: process.env.NODE_ENV || "development",
};

module.exports = env;
