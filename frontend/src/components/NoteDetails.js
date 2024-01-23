import { useContext } from "react";
import { formContext } from "../context/FormContext";

const NoteDetails = () => {
  const { notes, noteID } = useContext(formContext);

  const details = notes.find((note) => note._id === noteID);

  console.log(details);

  let date = new Date(details.createdAt);
  let time = date.toLocaleTimeString();

  let templateDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  }).format(date);

  return (
    <div className="flex h-[500px] w-[800px] flex-col items-start justify-start p-5">
      {details && (
        <div className="flex h-full w-full flex-col items-start justify-start">
          <div className="flex w-full justify-between">
            <div className="flex h-full w-96 flex-col gap-2">
              <label className="font-semibold">Title:</label>
              <h2 className="flex h-10 items-center rounded-lg bg-neutral-100 p-4 text-justify">
                {details.title}
              </h2>
            </div>
            <div className="flex h-full flex-col items-end gap-2">
              <label className="font-semibold">Date:</label>
              <div className="flex h-10 items-center rounded-lg bg-neutral-100 p-4 ">
                <h2 className="text-justify">{templateDate}</h2>
                <span>&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;{time}</span>
              </div>
            </div>
          </div>
          <div className="flex h-full w-full flex-col gap-2 pt-2">
            <label className="font-semibold">Message:</label>
            <p className="h-full w-full rounded-lg bg-neutral-100 p-4 text-justify">
              &nbsp;&nbsp;&nbsp;&nbsp;{details.message}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default NoteDetails;
