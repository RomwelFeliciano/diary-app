import { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useAuth } from "./useAuth";
import * as notesApi from "../api/notesApi";

// Encapsulates note data fetching + CRUD so pages/components stay presentational.
// Mutations patch local state from the server's response instead of refetching
// the whole list, so create/update/delete never re-trigger the notes skeleton.
export const useNotes = () => {
  const { user } = useAuth();
  const [notes, setNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchNotes = useCallback(async () => {
    setIsLoading(true);
    try {
      const data = await notesApi.fetchNotes();
      setNotes(data);
    } catch (error) {
      toast.error(error.response?.data?.msg || error.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (user) {
      fetchNotes();
    }
  }, [user, fetchNotes]);

  const addNote = async (payload) => {
    const note = await notesApi.createNote(payload);
    setNotes((prev) => [note, ...prev]);
    return note;
  };

  const editNote = async (id, payload) => {
    const note = await notesApi.updateNote(id, payload);
    setNotes((prev) => prev.map((n) => (n._id === id ? note : n)));
    return note;
  };

  const removeNote = async (id) => {
    await notesApi.deleteNote(id);
    setNotes((prev) => prev.filter((n) => n._id !== id));
  };

  return { notes, isLoading, addNote, editNote, removeNote };
};
