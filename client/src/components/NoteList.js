import { useContext } from "react";
import { NoteContext } from "../context/NoteContext";
import NoteCard from "./NoteCard";

const NoteList = () => {
  const { isLoading, notes } = useContext(NoteContext);

  if (!isLoading && notes.length === 0) {
    return <p>Notes are empty!</p>;
  }

  return (
    <div className="flex h-full w-full flex-wrap items-center justify-center gap-10">
      {notes.map((note) => (
        <NoteCard key={note._id} note={note} />
      ))}
    </div>
  );
};

export default NoteList;
