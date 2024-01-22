import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import NoteContainer from "./components/NoteContainer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Modal from "./components/Modal";

export const URL = process.env.REACT_APP_SERVER_URL;

function App() {
  const [showForm, setShowForm] = useState(false);
  const [notes, setNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
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
    console.log(formData);

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
      console.log(error);
    }
  };

  // Handle Get All Data
  const getNotes = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(`${URL}/api/notes`);
      // console.log(data);
      setNotes(data);
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      toast.error(error.message);
      console.log(error);
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  };

  // Re-redner when there are notes
  useEffect(() => {
    getNotes();
  }, []);

  // Delete Data
  const deleteNote = async (id) => {
    try {
      const { data } = await axios.delete(`${URL}/api/notes/${id}`);
      // console.log(data);
      getNotes();
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
  };

  // Get Single Note
  const getSingleNote = async (note) => {
    setFormData({ title: note.title, message: note.message });
    setShowForm(true);
    setNoteID(note._id);
    setIsEditing(true);
  };

  // Update a Note
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

  return (
    <div className="App min-h-screen">
      <Navbar />
      <main className="relative flex h-full min-h-screen w-full flex-col items-center justify-start px-20 py-32">
        <ToastContainer />
        {isLoading === true ? (
          <div class="fixed flex h-96 items-center justify-center">
            <div class="h-10 w-10 animate-spin rounded-full border-b-2 border-t-2 border-blue-400 ease-linear"></div>
            <div class="ml-3 h-10 w-10 animate-spin rounded-full border-b-2 border-t-2 border-yellow-400 ease-linear"></div>
            <div class="ml-3 h-10 w-10 animate-spin rounded-full border-b-2 border-t-2 border-red-400 ease-linear"></div>
          </div>
        ) : (
          <NoteContainer
            isLoading={isLoading}
            notes={notes}
            deleteNote={deleteNote}
            getSingleNote={getSingleNote}
          />
        )}

        <button
          className="fixed bottom-5 right-5 m-0 flex h-12 w-12 items-center justify-center rounded-full bg-green-400 pb-2 text-3xl font-bold transition-all duration-300 ease-in-out hover:bg-green-600"
          onClick={handleShowForm}
        >
          +
        </button>
      </main>
      {/* Modal */}
      <Modal
        showForm={showForm}
        handleCloseForm={handleCloseForm}
        handleInputChange={handleInputChange}
        createNote={createNote}
        title={title}
        message={message}
        isEditing={isEditing}
        updateNote={updateNote}
      />
    </div>
  );
}

export default App;
