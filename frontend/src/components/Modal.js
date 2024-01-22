import NoteForm from "./NoteForm";

const Modal = ({
  showForm,
  handleCloseForm,
  handleInputChange,
  createNote,
  title,
  message,
}) => {
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleCloseForm();
    }
  };
  return (
    <>
      {showForm && (
        <div
          className={`fixed top-0 z-0 flex h-full w-full items-center justify-center bg-neutral-700 bg-opacity-80 ${showForm ? "flex" : "hidden"}`}
          onClick={handleOverlayClick}
        >
          <div className="relative flex flex-col rounded-lg bg-green-300 p-4">
            <button
              className="absolute right-3 top-3 z-10 flex h-5 w-5 items-center justify-center rounded text-3xl"
              onClick={handleCloseForm}
            >
              &times;
            </button>
            <div className="-mt-2">
              {/* Your modal content goes here */}
              <NoteForm
                handleInputChange={handleInputChange}
                createNote={createNote}
                title={title}
                message={message}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
