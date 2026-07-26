import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MdAdd } from "react-icons/md";
import NoteList from "../components/NoteList";
import NoteModal from "../components/NoteModal";
import ConfirmDialog from "../components/ConfirmDialog";
import { NoteFormContext } from "../context/NoteFormContext";
import { NoteContext } from "../context/NoteContext";
import { useNotes } from "../hooks/useNotes";
import { useTheme } from "../hooks/useTheme";

const EMPTY_FORM = { title: "", message: "" };

const DiaryPage = () => {
  const { notes, isLoading, addNote, editNote, removeNote } = useNotes();
  const { theme } = useTheme();

  const [showForm, setShowForm] = useState(false);
  const [isViewing, setIsViewing] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [noteID, setNoteID] = useState("");
  const [formData, setFormData] = useState(EMPTY_FORM);
  const { title, message } = formData;

  const [pendingDeleteNote, setPendingDeleteNote] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleShowForm = () => {
    setShowForm(true);
    setIsCreating(true);
    setIsViewing(false);
  };

  const handleCloseForm = () => {
    if (isSubmitting) return;
    setShowForm(false);
    setFormData(EMPTY_FORM);
    setIsEditing(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const viewNote = (note) => {
    setFormData({ title: note.title, message: note.message });
    setNoteID(note._id);
    setShowForm(true);
    setIsCreating(false);
    setIsViewing(true);
    setIsEditing(false);
  };

  const startEditNote = (note) => {
    setFormData({ title: note.title, message: note.message });
    setNoteID(note._id);
    setShowForm(true);
    setIsViewing(false);
    setIsEditing(true);
  };

  const handleCreateSubmit = async (e) => {
    e.preventDefault();

    if (title === "" || message === "") {
      return toast.error("Please add a title and message to the input");
    }

    setIsSubmitting(true);
    try {
      await addNote(formData);
      toast.success("Diary has been created");
      setFormData(EMPTY_FORM);
      setShowForm(false);
    } catch (error) {
      toast.error(error.response?.data?.msg || error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();

    if (title === "" || message === "") {
      return toast.error("Please add a title and message to the input");
    }

    setIsSubmitting(true);
    try {
      await editNote(noteID, formData);
      toast.success("Note updated successfully");
      setFormData(EMPTY_FORM);
      setIsEditing(false);
      setShowForm(false);
    } catch (error) {
      toast.error(error.response?.data?.msg || error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const requestDeleteNote = (note) => {
    setPendingDeleteNote(note);
  };

  const cancelDeleteNote = () => {
    if (isDeleting) return;
    setPendingDeleteNote(null);
  };

  const confirmDeleteNote = async () => {
    if (!pendingDeleteNote) return;

    setIsDeleting(true);
    try {
      await removeNote(pendingDeleteNote._id);
      toast.warn("Diary has been deleted");
      setPendingDeleteNote(null);
    } catch (error) {
      toast.error(error.response?.data?.msg || error.message);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <>
      <ToastContainer position="top-center" autoClose={3000} theme={theme} />

      <div className="w-full max-w-6xl">
        <NoteContext.Provider
          value={{ isLoading, notes, viewNote, startEditNote, requestDeleteNote }}
        >
          <NoteList />
        </NoteContext.Provider>
      </div>

      <button
        className="fixed bottom-6 right-6 flex h-14 w-14 items-center justify-center rounded-full bg-brand-500 text-white shadow-lg transition-all duration-200 ease-in-out hover:scale-105 hover:bg-brand-600 active:scale-95"
        onClick={handleShowForm}
        aria-label="New entry"
        title="New entry"
      >
        <MdAdd className="h-7 w-7" />
      </button>

      <NoteFormContext.Provider
        value={{
          showForm,
          handleCloseForm,
          handleInputChange,
          handleCreateSubmit,
          handleUpdateSubmit,
          isCreating,
          isViewing,
          isEditing,
          isSubmitting,
          title,
          message,
          notes,
          noteID,
        }}
      >
        <NoteModal />
      </NoteFormContext.Provider>

      <ConfirmDialog
        open={!!pendingDeleteNote}
        title="Delete this entry?"
        message={
          pendingDeleteNote
            ? `"${pendingDeleteNote.title}" will be permanently deleted. This can't be undone.`
            : ""
        }
        confirmLabel="Delete"
        isLoading={isDeleting}
        onConfirm={confirmDeleteNote}
        onCancel={cancelDeleteNote}
      />
    </>
  );
};

export default DiaryPage;
