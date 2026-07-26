import { useContext } from "react";
import { NoteContext } from "../context/NoteContext";
import {
  MdOutlineRemoveRedEye,
  MdOutlineEditNote,
  MdOutlineDeleteOutline,
} from "react-icons/md";
import { formatNoteDate } from "../utils/formatDate";

const NoteCard = ({ note }) => {
  const { viewNote, startEditNote, requestDeleteNote } =
    useContext(NoteContext);
  const { date, time } = formatNoteDate(note.createdAt);

  return (
    <div className="flex h-64 flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:shadow-card-hover">
      <div className="min-h-0 flex-1">
        <div className="flex items-start justify-between gap-3">
          <h3 className="line-clamp-1 text-base font-semibold text-slate-900">
            {note.title}
          </h3>
          <span className="shrink-0 text-xs font-medium text-slate-400">
            {date}
          </span>
        </div>
        <p className="mt-3 line-clamp-4 text-sm leading-relaxed text-slate-500">
          {note.message}
        </p>
      </div>
      <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3">
        <span className="text-xs text-slate-400">{time}</span>
        <div className="flex items-center gap-1">
          <button
            className="flex h-8 w-8 items-center justify-center rounded-full text-slate-400 transition-colors hover:bg-blue-50 hover:text-blue-500"
            onClick={() => viewNote(note)}
            aria-label="View note"
            title="View"
          >
            <MdOutlineRemoveRedEye className="h-[18px] w-[18px]" />
          </button>
          <button
            className="flex h-8 w-8 items-center justify-center rounded-full text-slate-400 transition-colors hover:bg-amber-50 hover:text-amber-500"
            onClick={() => startEditNote(note)}
            aria-label="Edit note"
            title="Edit"
          >
            <MdOutlineEditNote className="h-[18px] w-[18px]" />
          </button>
          <button
            className="flex h-8 w-8 items-center justify-center rounded-full text-slate-400 transition-colors hover:bg-red-50 hover:text-red-500"
            onClick={() => requestDeleteNote(note)}
            aria-label="Delete note"
            title="Delete"
          >
            <MdOutlineDeleteOutline className="h-[18px] w-[18px]" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
