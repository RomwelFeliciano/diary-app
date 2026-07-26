import { useContext } from "react";
import NoteDetails from "./NoteDetails";
import NoteForm from "./NoteForm";
import { NoteFormContext } from "../context/NoteFormContext";

const NoteModal = () => {
  const { showForm, handleCloseForm, isCreating, isViewing, isEditing } =
    useContext(NoteFormContext);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleCloseForm();
    }
  };

  if (!showForm) {
    return null;
  }

  return (
    <div
      className="fixed top-0 z-0 flex h-full w-full items-center justify-center bg-neutral-700 bg-opacity-80 p-4 md:p-0"
      onClick={handleOverlayClick}
    >
      <div className="relative flex w-full flex-col rounded-lg bg-green-300 p-4 md:w-auto">
        <button
          className="absolute right-3 top-3 z-10 flex h-5 w-5 items-center justify-center rounded text-3xl"
          onClick={handleCloseForm}
        >
          &times;
        </button>
        <div className="-mt-2 w-full">
          {(isCreating || isEditing) && <NoteForm />}
          {isViewing && <NoteDetails />}
        </div>
      </div>
    </div>
  );
};

export default NoteModal;
