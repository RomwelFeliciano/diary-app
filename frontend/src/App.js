import Navbar from "./components/Navbar";
import NoteContainer from "./components/NoteContainer";

function App() {
  return (
    <div className="App min-h-screen">
      <Navbar />
      <main className="w-full h-full min-h-screen flex flex-col justify-center items-center pt-32 px-20">
        <NoteContainer />
      </main>
    </div>
  );
}

export default App;
