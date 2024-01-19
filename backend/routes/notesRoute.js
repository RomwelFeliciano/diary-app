const express = require("express");
const Notes = require("../models/notesModel");
const {
  createNote,
  getAllNotes,
  getSingleNotes,
  deleteNote,
  updateNote,
} = require("../controllers/notesController");

const router = express.Router();

// Create a Note
router.post("/api/notes", createNote);

// Get All Note
router.get("/api/notes", getAllNotes);

// Get a Single Note
router.get("/api/notes/:id", getSingleNotes);

// Delete a Note
router.delete("/api/notes/:id", deleteNote);

// Update a Note
router.put("/api/notes/:id", updateNote);

module.exports = router;
