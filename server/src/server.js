const app = require("./app");
const connectDB = require("./config/db");
const env = require("./config/env");

const start = async () => {
  try {
    await connectDB();
    app.listen(env.port, () => {
      console.log(`Server listening on port ${env.port} (${env.nodeEnv})`);
    });
  } catch (error) {
    console.error("Failed to start server:", error.message);
    process.exit(1);
  }
};

start();
