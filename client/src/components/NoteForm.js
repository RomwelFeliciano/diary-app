import { useContext } from "react";
import { NoteFormContext } from "../context/NoteFormContext";
import Spinner from "./Spinner";

const NoteForm = () => {
  const {
    handleInputChange,
    handleCreateSubmit,
    handleUpdateSubmit,
    isEditing,
    isSubmitting,
    title,
    message,
  } = useContext(NoteFormContext);

  return (
    <form
      className="flex w-full flex-col gap-4"
      onSubmit={isEditing ? handleUpdateSubmit : handleCreateSubmit}
    >
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="note-title"
          className="text-sm font-medium text-slate-700 dark:text-slate-300"
        >
          Title
        </label>
        <input
          id="note-title"
          type="text"
          className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-colors focus:border-brand-400 focus:ring-4 focus:ring-brand-100 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:border-brand-500 dark:focus:ring-brand-900/40"
          name="title"
          onChange={handleInputChange}
          value={title}
          placeholder="Give your entry a title"
          autoComplete="off"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="note-message"
          className="text-sm font-medium text-slate-700 dark:text-slate-300"
        >
          Message
        </label>
        <textarea
          id="note-message"
          rows={8}
          className="resize-none rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-colors focus:border-brand-400 focus:ring-4 focus:ring-brand-100 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:border-brand-500 dark:focus:ring-brand-900/40"
          name="message"
          onChange={handleInputChange}
          value={message}
          placeholder="Write what's on your mind..."
        />
      </div>
      <button
        className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-brand-500 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-600 disabled:cursor-not-allowed disabled:opacity-70"
        disabled={isSubmitting}
      >
        {isSubmitting && <Spinner className="h-4 w-4" />}
        {isSubmitting
          ? isEditing
            ? "Updating..."
            : "Adding..."
          : isEditing
            ? "Save changes"
            : "Create entry"}
      </button>
    </form>
  );
};

export default NoteForm;
