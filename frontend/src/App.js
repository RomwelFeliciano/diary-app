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
  const [completed, setCompleted] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
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
      setFormData({ title: "", message: "", completed: false });
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
      setIsLoading(false);
    } catch (error) {
      toast.error(error.message);
      console.log(error);
      setIsLoading(false);
    }
  };

  // Re-redner when there are notes
  useEffect(() => {
    getNotes();
  }, []);

  return (
    <div className="App min-h-screen">
      <Navbar />
      <main className="relative flex h-full min-h-screen w-full flex-col items-center justify-start px-20 pt-32">
        <ToastContainer />
        {!isLoading && <NoteContainer isLoading={isLoading} notes={notes} />}

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
      />
    </div>
  );
}

export default App;
