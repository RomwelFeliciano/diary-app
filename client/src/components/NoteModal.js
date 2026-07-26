import { useContext } from "react";
import { MdClose } from "react-icons/md";
import NoteDetails from "./NoteDetails";
import NoteForm from "./NoteForm";
import { NoteFormContext } from "../context/NoteFormContext";

const NoteModal = () => {
  const { showForm, handleCloseForm, isCreating, isViewing, isEditing } =
    useContext(NoteFormContext);

  if (!showForm) {
    return null;
  }

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleCloseForm();
    }
  };

  const title = isCreating ? "New entry" : isEditing ? "Edit entry" : "Entry";

  return (
    <div
      className="fixed inset-0 z-40 flex items-center justify-center bg-slate-900/50 p-4 backdrop-blur-sm animate-overlay-in"
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="note-modal-title"
    >
      <div
        className={`flex max-h-[90vh] w-full flex-col overflow-hidden rounded-2xl bg-white shadow-soft animate-modal-in ${
          isViewing ? "max-w-2xl" : "max-w-lg"
        }`}
      >
        <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4">
          <h2
            id="note-modal-title"
            className="text-lg font-semibold text-slate-900"
          >
            {title}
          </h2>
          <button
            className="flex h-8 w-8 items-center justify-center rounded-full text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600"
            onClick={handleCloseForm}
            aria-label="Close"
          >
            <MdClose className="h-5 w-5" />
          </button>
        </div>
        <div className="scrollbar-thin overflow-y-auto p-6">
          {(isCreating || isEditing) && <NoteForm />}
          {isViewing && <NoteDetails />}
        </div>
      </div>
    </div>
  );
};

export default NoteModal;
