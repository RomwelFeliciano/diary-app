const notFound = (req, res, next) => {
  res.status(404).json({ msg: `Route not found: ${req.originalUrl}` });
};

// Centralized error handler - keeps controllers free of repetitive try/catch blocks
const errorHandler = (error, req, res, next) => {
  let statusCode =
    error.statusCode || (res.statusCode !== 200 ? res.statusCode : 500);
  let message = error.message || "Server Error";

  if (error.name === "ValidationError") {
    statusCode = 400;
    message = Object.values(error.errors)
      .map((e) => e.message)
      .join(", ");
  }

  if (error.name === "CastError") {
    statusCode = 400;
    message = `Invalid ${error.path}: ${error.value}`;
  }

  if (error.code === 11000) {
    statusCode = 409;
    message = "Duplicate field value entered";
  }

  res.status(statusCode).json({ msg: message });
};

module.exports = { notFound, errorHandler };
