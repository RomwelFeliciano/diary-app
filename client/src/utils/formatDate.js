const dateFormatter = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "2-digit",
});

export const formatNoteDate = (isoString) => {
  const date = new Date(isoString);
  return {
    date: dateFormatter.format(date),
    time: date.toLocaleTimeString(),
  };
};
