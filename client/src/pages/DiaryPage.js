import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NoteList from "../components/NoteList";
import NoteModal from "../components/NoteModal";
import LoadingSpinner from "../components/LoadingSpinner";
import { NoteFormContext } from "../context/NoteFormContext";
import { NoteContext } from "../context/NoteContext";
import { useNotes } from "../hooks/useNotes";

const EMPTY_FORM = { title: "", message: "" };

const DiaryPage = () => {
  const { notes, isLoading, addNote, editNote, removeNote } = useNotes();

  const [showForm, setShowForm] = useState(false);
  const [isViewing, setIsViewing] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [noteID, setNoteID] = useState("");
  const [formData, setFormData] = useState(EMPTY_FORM);
  const { title, message } = formData;

  const handleShowForm = () => {
    setShowForm(true);
    setIsCreating(true);
    setIsViewing(false);
  };

  const handleCloseForm = () => {
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

    try {
      await addNote(formData);
      toast.success("Diary has been created");
      setFormData(EMPTY_FORM);
      setShowForm(false);
    } catch (error) {
      toast.error(error.response?.data?.msg || error.message);
    }
  };

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();

    if (title === "" || message === "") {
      return toast.error("Please add a title and message to the input");
    }

    try {
      await editNote(noteID, formData);
      toast.success("Note updated successfully");
      setFormData(EMPTY_FORM);
      setIsEditing(false);
      setShowForm(false);
    } catch (error) {
      toast.error(error.response?.data?.msg || error.message);
    }
  };

  const deleteNote = async (id) => {
    try {
      await removeNote(id);
      toast.warn("Diary has been deleted");
    } catch (error) {
      toast.error(error.response?.data?.msg || error.message);
    }
  };

  return (
    <>
      <ToastContainer position="top-center" autoClose={3000} />

      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <NoteContext.Provider
          value={{ isLoading, notes, viewNote, startEditNote, deleteNote }}
        >
          <NoteList />
        </NoteContext.Provider>
      )}

      <button
        className="fixed bottom-5 right-5 m-0 flex h-12 w-12 items-center justify-center rounded-full bg-green-400 pb-2 text-3xl font-bold transition-all duration-300 ease-in-out hover:bg-green-600"
        onClick={handleShowForm}
      >
        +
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
          title,
          message,
          notes,
          noteID,
        }}
      >
        <NoteModal />
      </NoteFormContext.Provider>
    </>
  );
};

export default DiaryPage;
