import httpClient from "./httpClient";

export const fetchNotes = async () => {
  const { data } = await httpClient.get("/api/notes");
  return data;
};

export const createNote = async ({ title, message }) => {
  const { data } = await httpClient.post("/api/notes", { title, message });
  return data;
};

export const updateNote = async (id, { title, message }) => {
  const { data } = await httpClient.put(`/api/notes/${id}`, {
    title,
    message,
  });
  return data;
};

export const deleteNote = async (id) => {
  const { data } = await httpClient.delete(`/api/notes/${id}`);
  return data;
};
