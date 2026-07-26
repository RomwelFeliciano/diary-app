const express = require("express");
const requireAuth = require("../middleware/requireAuth");
const {
  createNote,
  getNotes,
  getNoteById,
  updateNote,
  deleteNote,
} = require("../controllers/note.controller");

const router = express.Router();

// All note routes require an authenticated user
router.use(requireAuth);

router.route("/").post(createNote).get(getNotes);

router.route("/:id").get(getNoteById).put(updateNote).delete(deleteNote);

module.exports = router;
