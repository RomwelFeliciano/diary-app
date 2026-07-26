const NoteCardSkeleton = () => (
  <div className="flex h-[280px] w-full flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-card dark:border-slate-700 dark:bg-slate-800 dark:shadow-none">
    <div className="flex items-start justify-between gap-4">
      <div className="h-5 w-2/3 animate-pulse rounded bg-slate-200 dark:bg-slate-700" />
      <div className="h-4 w-16 animate-pulse rounded bg-slate-200 dark:bg-slate-700" />
    </div>
    <div className="mt-4 flex-1 space-y-2">
      <div className="h-3 w-full animate-pulse rounded bg-slate-100 dark:bg-slate-700/60" />
      <div className="h-3 w-full animate-pulse rounded bg-slate-100 dark:bg-slate-700/60" />
      <div className="h-3 w-5/6 animate-pulse rounded bg-slate-100 dark:bg-slate-700/60" />
      <div className="h-3 w-2/3 animate-pulse rounded bg-slate-100 dark:bg-slate-700/60" />
    </div>
    <div className="mt-4 flex items-center justify-end gap-2 border-t border-slate-100 pt-4 dark:border-slate-700">
      <div className="h-9 w-9 animate-pulse rounded-full bg-slate-100 dark:bg-slate-700/60" />
      <div className="h-9 w-9 animate-pulse rounded-full bg-slate-100 dark:bg-slate-700/60" />
      <div className="h-9 w-9 animate-pulse rounded-full bg-slate-100 dark:bg-slate-700/60" />
    </div>
  </div>
);

export default NoteCardSkeleton;
