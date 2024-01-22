const NoteForm = ({ title, message, createNote, handleInputChange }) => {
  return (
    <div className="flex h-full w-[500px] flex-col items-start justify-center">
      <h1 className="mb-3 text-2xl font-bold">Create my Diary</h1>
      <form className="flex w-full flex-col gap-4" onSubmit={createNote}>
        <div className="flex w-full flex-col">
          <label className="mb-1 text-base font-semibold">Title:</label>
          <input
            type="text"
            className="h-10 rounded-lg px-2"
            name="title"
            onChange={handleInputChange}
            value={title}
            placeholder="Title"
          />
        </div>
        <div className="flex w-full flex-col">
          <label className="mb-1 text-base font-semibold">Message:</label>
          <textarea
            rows={8}
            className="rounded-lg p-2"
            name="message"
            onChange={handleInputChange}
            value={message}
            placeholder="Body Message"
          />
        </div>
        <button className="rounded-lg bg-neutral-800 py-2 text-white transition-all duration-300 ease-in-out hover:bg-neutral-900">
          Create
        </button>
      </form>
    </div>
  );
};

export default NoteForm;
