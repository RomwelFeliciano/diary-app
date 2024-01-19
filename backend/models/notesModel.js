const mongoose = require("mongoose");

const notesSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Cannot leave empty"],
    },
    message: {
      type: String,
      required: [true, "Cannot leave empty"],
    },
    completed: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { timestamps: true }
);

const Notes = mongoose.model("Notes", notesSchema);

module.exports = Notes;
