import NoteItem from "./NoteItem";

const NoteContainer = () => {
  return (
    <div className="flex h-full w-full flex-wrap items-center justify-center gap-10">
      <NoteItem />
      <NoteItem />
      <NoteItem />
      <NoteItem />
    </div>
  );
};

export default NoteContainer;
