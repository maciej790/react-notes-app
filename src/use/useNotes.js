import { useState } from "react";

export const useNotes = () => {
  const [notes, setnotes] = useState(() => {
    const saved = localStorage.getItem("notes");
    const initialState = JSON.parse(saved);
    return initialState || [];
  });

  const saveNote = (note) => {
    if (notes) {
      const updatedNotes = [...notes, note];
      localStorage.setItem("notes", JSON.stringify(updatedNotes));
      setnotes(updatedNotes);
    } else {
      localStorage.setItem("notes", JSON.stringify(note));
      setnotes(note);
    }
  };

  const removeNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id != id);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
    setnotes(updatedNotes);
  };

  return { notes, saveNote, removeNote };
};
