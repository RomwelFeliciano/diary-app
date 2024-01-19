import Navbar from "./components/Navbar";
import NoteContainer from "./components/NoteContainer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App min-h-screen">
      <Navbar />
      <main className="w-full h-full relative min-h-screen flex flex-col justify-start items-center pt-32 px-20">
        <ToastContainer />
        <NoteContainer />
        <button className="w-12 h-12 fixed bottom-5 right-5 bg-green-400 hover:bg-green-600 transition-all duration-300 ease-in-out rounded-full flex justify-center items-center text-3xl font-bold pb-2 m-0">
          +
        </button>
      </main>
    </div>
  );
}

export default App;
