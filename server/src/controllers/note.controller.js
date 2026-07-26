const mongoose = require("mongoose");
const Note = require("../models/Note.model");
const asyncHandler = require("../utils/asyncHandler");

const assertValidId = (id) => {
  if (!mongoose.isValidObjectId(id)) {
    const error = new Error(`Invalid note id: ${id}`);
    error.statusCode = 400;
    throw error;
  }
};

// POST /api/notes
const createNote = asyncHandler(async (req, res) => {
  const { title, message } = req.body;
  const note = await Note.create({ title, message, userId: req.user._id });
  res.status(201).json(note);
});

// GET /api/notes
const getNotes = asyncHandler(async (req, res) => {
  const notes = await Note.find({ userId: req.user._id }).sort({
    createdAt: -1,
  });
  res.status(200).json(notes);
});

// GET /api/notes/:id
const getNoteById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  assertValidId(id);

  const note = await Note.findOne({ _id: id, userId: req.user._id });
  if (!note) {
    return res.status(404).json({ msg: `No note with id: ${id}` });
  }

  res.status(200).json(note);
});

// PUT /api/notes/:id
const updateNote = asyncHandler(async (req, res) => {
  const { id } = req.params;
  assertValidId(id);

  const { title, message } = req.body;
  const note = await Note.findOneAndUpdate(
    { _id: id, userId: req.user._id },
    { title, message },
    { new: true, runValidators: true },
  );

  if (!note) {
    return res.status(404).json({ msg: `No note with id: ${id}` });
  }

  res.status(200).json(note);
});

// DELETE /api/notes/:id
const deleteNote = asyncHandler(async (req, res) => {
  const { id } = req.params;
  assertValidId(id);

  const note = await Note.findOneAndDelete({ _id: id, userId: req.user._id });
  if (!note) {
    return res.status(404).json({ msg: `No note with id: ${id}` });
  }

  res.status(200).json(note);
});

module.exports = {
  createNote,
  getNotes,
  getNoteById,
  updateNote,
  deleteNote,
};
