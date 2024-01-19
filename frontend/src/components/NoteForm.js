import React, { useState } from "react";

const NoteForm = () => {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="flex h-full w-[500px] flex-col items-start justify-center">
      <h1 className="mb-3 text-2xl font-bold">Create my Diary</h1>
      <form className="flex w-full flex-col gap-4">
        <div className="flex w-full flex-col">
          <label className="mb-1 text-base font-semibold">Title:</label>
          <input
            type="text"
            className="h-10 rounded-lg px-2"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </div>
        <div className="flex w-full flex-col">
          <label className="mb-1 text-base font-semibold">Message:</label>
          <textarea
            rows={8}
            className="rounded-lg p-2"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
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
