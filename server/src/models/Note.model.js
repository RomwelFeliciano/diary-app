const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title cannot be empty"],
      trim: true,
    },
    message: {
      type: String,
      required: [true, "Message cannot be empty"],
      trim: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true },
);

const Note = mongoose.model("Note", noteSchema);

module.exports = Note;
