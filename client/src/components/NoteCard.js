import { useContext } from "react";
import { NoteContext } from "../context/NoteContext";
import { MdPreview, MdOutlineEditNote, MdDelete } from "react-icons/md";

const THUMBNAIL_LENGTH = 480;

const NoteCard = ({ note }) => {
  const { viewNote, startEditNote, deleteNote } = useContext(NoteContext);

  const date = new Date(note.createdAt);
  const time = date.toLocaleTimeString();
  const templateDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  }).format(date);

  const thumbMessage = note.message.substring(0, THUMBNAIL_LENGTH);
  const isTruncated = note.message.length > THUMBNAIL_LENGTH;

  return (
    <div className="flex h-[500px] w-96 flex-col justify-between rounded-lg bg-green-300 p-4 md:h-[450px] xl:h-[420px]">
      <div className="flex h-auto flex-col justify-between gap-2 pb-3 md:flex-row md:items-center md:gap-0">
        <h1 className="w-auto text-center text-lg font-bold lg:w-3/5 lg:text-left">
          {note.title}
        </h1>
        <div className="flex flex-col items-start justify-center">
          <h2 className="text-xs font-semibold md:text-base">{templateDate}</h2>
          <span className="text-[10px] tracking-wider text-neutral-800 md:text-xs">
            {time}
          </span>
        </div>
      </div>
      <div className="h-full">
        <hr className="mb-3 border-neutral-900" />
        <p className="h-full text-justify text-sm leading-6 tracking-wide">
          &nbsp;&nbsp;&nbsp;&nbsp;{thumbMessage}
          {isTruncated ? "..." : ""}
        </p>
      </div>
      <div className="flex h-auto items-center justify-evenly">
        <button
          className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-400 py-1 text-2xl font-semibold text-black transition-all duration-150 ease-in-out hover:bg-blue-500"
          onClick={() => viewNote(note)}
          aria-label="View note"
        >
          <MdPreview />
        </button>
        <button
          className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-400 py-1 text-2xl font-semibold text-black transition-all duration-150 ease-in-out hover:bg-yellow-500"
          onClick={() => startEditNote(note)}
          aria-label="Edit note"
        >
          <MdOutlineEditNote />
        </button>
        <button
          className="flex h-10 w-10 items-center justify-center rounded-full bg-red-400 py-1 text-2xl font-semibold text-black transition-all duration-150 ease-in-out hover:bg-red-500"
          onClick={() => deleteNote(note._id)}
          aria-label="Delete note"
        >
          <MdDelete />
        </button>
      </div>
    </div>
  );
};

export default NoteCard;
