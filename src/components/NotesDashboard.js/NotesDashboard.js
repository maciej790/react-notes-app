/* eslint-disable react/prop-types */
import React from "react";
import {
  Dashboard,
  NoteItem,
  NoteHeader,
  RemoveNoteButton,
  NoteDescription,
  NoteColor,
} from "./StyledNotesDashboard";
import { AiOutlineClose } from "react-icons/ai";

function NotesDashboard({ notes, handleRemove }) {
  const note = notes.map(({ id, title, description, color }) => (
    <NoteItem key={id}>
      <NoteHeader>
        <h2>{title}</h2>
        <RemoveNoteButton onClick={() => handleRemove(id)}>
          {" "}
          <AiOutlineClose />
        </RemoveNoteButton>
      </NoteHeader>
      <NoteDescription>{description}</NoteDescription>
      <NoteColor color={color}></NoteColor>
    </NoteItem>
  ));

  return <Dashboard>{notes.length ? note : <h2>Empty notes!</h2>}</Dashboard>;
}

export default NotesDashboard;
