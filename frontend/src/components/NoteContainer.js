import NoteItem from "./NoteItem";

const NoteContainer = () => {
  return (
    <div className="w-full h-full flex flex-wrap justify-center items-center gap-10">
      <NoteItem />
      <NoteItem />
      <NoteItem />
      <NoteItem />
    </div>
  );
};

export default NoteContainer;
