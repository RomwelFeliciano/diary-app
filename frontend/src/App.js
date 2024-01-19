import { useState } from "react";
import Navbar from "./components/Navbar";
import NoteContainer from "./components/NoteContainer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "./components/Modal";

function App() {
  const [showForm, setShowForm] = useState(false);

  const handleShowForm = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <div className="App min-h-screen">
      <Navbar />
      <main className="relative flex h-full min-h-screen w-full flex-col items-center justify-start px-20 pt-32">
        <ToastContainer />
        <NoteContainer />
        <button
          className="fixed bottom-5 right-5 m-0 flex h-12 w-12 items-center justify-center rounded-full bg-green-400 pb-2 text-3xl font-bold transition-all duration-300 ease-in-out hover:bg-green-600"
          onClick={handleShowForm}
        >
          +
        </button>
      </main>
      {/* Modal */}
      <Modal showForm={showForm} handleCloseForm={handleCloseForm} />
    </div>
  );
}

export default App;
