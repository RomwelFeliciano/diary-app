import { useEffect, useState } from "react";
import NoteContainer from "../components/NoteContainer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Modal from "../components/Modal";
import { formContext } from "../context/FormContext";

export const URL = process.env.REACT_APP_SERVER_URL;

const Home = () => {
  const [showForm, setShowForm] = useState(false);
  const [notes, setNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isViewing, setIsViewing] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [noteID, setNoteID] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    message: "",
    completed: false,
  });

  // Show Modal
  const handleShowForm = () => {
    setShowForm(true);
    setIsCreating(true);
    setIsViewing(false);
  };

  // Close Modal
  const handleCloseForm = () => {
    setShowForm(false);
    setFormData({ title: "", message: "" });
    setIsEditing(false);
  };

  // Destructuring the data
  const { title, message } = formData;

  // Handle Input Change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle Create Note
  const createNote = async (e) => {
    e.preventDefault();

    if (title === "" || message === "") {
      return toast.error("Please add a title and message to the input");
    }
    try {
      //Axios
      await axios.post(`${URL}/api/notes`, formData);
      toast.success("Diary has been created");
      setFormData({ title: "", message: "" });
      setShowForm(false);

      // Fetch updated notes
      getNotes();
    } catch (error) {
      toast.error(error.message);
    }
  };

  // Handle Get All Data
  const getNotes = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(`${URL}/api/notes`);
      setNotes(data);
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      toast.error(error.message);
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  };

  // Re-render when there are notes
  useEffect(() => {
    getNotes();
  }, []);

  // Handle View Note
  const viewNote = async (note) => {
    setFormData({ title: note.title, message: note.message });
    setNoteID(note._id);
    setShowForm(true);
    setIsCreating(false);
    setIsViewing(true);
    setIsEditing(false);
  };

  // Handle Get Single Note
  const getSingleNote = async (note) => {
    setFormData({ title: note.title, message: note.message });
    setShowForm(true);
    setNoteID(note._id);
    setIsViewing(false);
    setIsEditing(true);
  };

  // Handle Update a Note
  const updateNote = async (e) => {
    e.preventDefault();

    if (title === "" || message === "") {
      return toast.error("Please add a title and message to the input");
    }

    try {
      await axios.put(`${URL}/api/notes/${noteID}`, formData);
      setFormData({ title: "", message: "" });
      setIsEditing(false);
      setShowForm(false);
      getNotes();
      toast.success("Note Updated Successfully");
    } catch (error) {
      toast.error(error.message);
    }
  };

  // Handle Delete Data
  const deleteNote = async (id) => {
    try {
      await axios.delete(`${URL}/api/notes/${id}`);
      getNotes();
      toast.warn("Diary has been Deleted");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <ToastContainer position="top-center" autoClose={3000} />
      {isLoading === true ? (
        <div className="fixed flex h-96 items-center justify-center">
          <div className="h-10 w-10 animate-spin rounded-full border-b-2 border-t-2 border-blue-400 ease-linear"></div>
          <div className="ml-3 h-10 w-10 animate-spin rounded-full border-b-2 border-t-2 border-yellow-400 ease-linear"></div>
          <div className="ml-3 h-10 w-10 animate-spin rounded-full border-b-2 border-t-2 border-red-400 ease-linear"></div>
        </div>
      ) : (
        <NoteContainer
          isLoading={isLoading}
          notes={notes}
          deleteNote={deleteNote}
          getSingleNote={getSingleNote}
          viewNote={viewNote}
        />
      )}

      <button
        className="fixed bottom-5 right-5 m-0 flex h-12 w-12 items-center justify-center rounded-full bg-green-400 pb-2 text-3xl font-bold transition-all duration-300 ease-in-out hover:bg-green-600"
        onClick={handleShowForm}
      >
        +
      </button>

      {/* Modal */}
      <formContext.Provider
        value={{
          showForm,
          handleCloseForm,
          handleInputChange,
          createNote,
          updateNote,
          isCreating,
          isViewing,
          isEditing,
          title,
          message,
          notes,
          noteID,
        }}
      >
        <Modal />
      </formContext.Provider>
    </>
  );
};

export default Home;