import React from "react";

const NoteItem = ({ note }) => {
  let message = note.message;
  let date = new Date(note.createdAt);
  let time = date.toLocaleTimeString();

  let thumbMessage = message.substring(0, 480);
  let templateDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  }).format(date);

  return (
    <div className="flex h-96 w-96 flex-col justify-between rounded-lg bg-green-300 p-4">
      <div className="flex h-auto items-center justify-between pb-3">
        <h1 className="text-lg font-bold">{note.title}</h1>
        <div className="flex flex-col items-start justify-center">
          <h2 className="text-md font-bold">{templateDate}</h2>
          <span className="text-xs tracking-wider text-neutral-800">
            {time}
          </span>
        </div>
      </div>
      <div className="h-full">
        <hr className="mb-3 border-neutral-900" />
        <p className="text-justify text-sm leading-6 tracking-wide">
          &nbsp;&nbsp;&nbsp;&nbsp;{thumbMessage}
          {thumbMessage.length >= 480 ? "..." : ""}
        </p>
      </div>
      <div className="flex h-auto items-center justify-evenly">
        <button className="w-24 rounded-lg bg-sky-500 py-1 font-semibold transition-all duration-150 ease-in-out hover:bg-sky-600">
          View
        </button>
        <button className="w-24 rounded-lg bg-green-500 py-1 font-semibold transition-all duration-150 ease-in-out hover:bg-green-600">
          Edit
        </button>
        <button className="w-24 rounded-lg bg-red-500 py-1 font-semibold transition-all duration-150 ease-in-out hover:bg-red-600">
          Delete
        </button>
      </div>
    </div>
  );
};

export default NoteItem;
