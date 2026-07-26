import NoteCardSkeleton from "./NoteCardSkeleton";

const PLACEHOLDER_COUNT = 6;

const NoteListSkeleton = () => (
  <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
    {Array.from({ length: PLACEHOLDER_COUNT }).map((_, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <NoteCardSkeleton key={index} />
    ))}
  </div>
);

export default NoteListSkeleton;
