// Wraps an async route handler so rejected promises are forwarded to Express's error middleware
const asyncHandler = (handler) => (req, res, next) => {
  Promise.resolve(handler(req, res, next)).catch(next);
};

module.exports = asyncHandler;
