import { useContext } from "react";
import { NoteFormContext } from "../context/NoteFormContext";
import { formatNoteDate } from "../utils/formatDate";

const NoteDetails = () => {
  const { notes, noteID } = useContext(NoteFormContext);

  const details = notes.find((note) => note._id === noteID);

  if (!details) {
    return null;
  }

  const { date, time } = formatNoteDate(details.createdAt);

  return (
    <div className="flex flex-col gap-4">
      <div>
        <h3 className="text-xl font-semibold text-slate-900">
          {details.title}
        </h3>
        <p className="mt-1 text-sm text-slate-400">
          {date} &middot; {time}
        </p>
      </div>
      <p className="scrollbar-thin max-h-[50vh] overflow-y-auto whitespace-pre-wrap text-sm leading-relaxed text-slate-600">
        {details.message}
      </p>
    </div>
  );
};

export default NoteDetails;
