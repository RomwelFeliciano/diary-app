const express = require("express");
const cors = require("cors");
const env = require("./config/env");
const noteRoutes = require("./routes/note.routes");
const authRoutes = require("./routes/auth.routes");
const { notFound, errorHandler } = require("./middleware/errorHandler");

const app = express();

app.use(cors({ origin: env.clientOrigin }));
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ status: "ok" });
});

app.use("/api/auth", authRoutes);
app.use("/api/notes", noteRoutes);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
