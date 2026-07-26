import { useContext } from "react";
import { NoteContext } from "../context/NoteContext";
import NoteCard from "./NoteCard";
import NoteListSkeleton from "./skeletons/NoteListSkeleton";
import { MdOutlineMenuBook } from "react-icons/md";

const NoteList = () => {
  const { isLoading, notes } = useContext(NoteContext);

  if (isLoading) {
    return <NoteListSkeleton />;
  }

  if (notes.length === 0) {
    return (
      <div className="flex w-full flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-slate-300 bg-white/60 px-6 py-20 text-center animate-fade-in">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-50 text-brand-500">
          <MdOutlineMenuBook className="h-7 w-7" />
        </span>
        <p className="text-base font-semibold text-slate-700">
          No entries yet
        </p>
        <p className="max-w-xs text-sm text-slate-500">
          Tap the <span className="font-medium text-brand-600">+</span>{" "}
          button to write your first diary entry.
        </p>
      </div>
    );
  }

  return (
    <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3 animate-fade-in">
      {notes.map((note) => (
        <NoteCard key={note._id} note={note} />
      ))}
    </div>
  );
};

export default NoteList;
