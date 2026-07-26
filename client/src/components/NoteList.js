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
      <div className="flex w-full flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-slate-300 bg-white/60 px-6 py-20 text-center animate-fade-in dark:border-slate-700 dark:bg-slate-800/40">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-50 text-brand-500 dark:bg-brand-900/40 dark:text-brand-400">
          <MdOutlineMenuBook className="h-7 w-7" />
        </span>
        <p className="text-base font-semibold text-slate-700 dark:text-slate-200">
          No entries yet
        </p>
        <p className="max-w-xs text-sm text-slate-500 dark:text-slate-400">
          Tap the{" "}
          <span className="font-medium text-brand-600 dark:text-brand-400">
            +
          </span>{" "}
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
