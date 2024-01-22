import NoteItem from "./NoteItem";

const NoteContainer = ({ notes, isLoading }) => {
  return (
    <div className="flex h-full w-full flex-wrap items-center justify-center gap-10">
      {!isLoading && notes.length === 0 ? (
        <p>Notes are empty!</p>
      ) : (
        <>
          {notes.map((note, index) => {
            return <NoteItem key={index} note={note} />;
          })}
        </>
      )}
    </div>
  );
};

export default NoteContainer;
