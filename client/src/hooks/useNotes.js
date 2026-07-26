import { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useAuth } from "./useAuth";
import * as notesApi from "../api/notesApi";

// Encapsulates note data fetching + CRUD so pages/components stay presentational
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
    await notesApi.createNote(payload);
    await fetchNotes();
  };

  const editNote = async (id, payload) => {
    await notesApi.updateNote(id, payload);
    await fetchNotes();
  };

  const removeNote = async (id) => {
    await notesApi.deleteNote(id);
    await fetchNotes();
  };

  return { notes, isLoading, addNote, editNote, removeNote };
};
