import NoteItem from "./NoteItem";

const NoteContainer = ({ notes, isLoading, deleteNote, getSingleNote }) => {
  return (
    <div className="flex h-full w-full flex-wrap items-center justify-center gap-10">
      {!isLoading && notes.length === 0 ? (
        <p>Notes are empty!</p>
      ) : (
        <>
          {notes.map((note, index) => {
            return (
              <NoteItem
                key={index}
                note={note}
                deleteNote={deleteNote}
                getSingleNote={getSingleNote}
              />
            );
          })}
        </>
      )}
    </div>
  );
};

export default NoteContainer;
