/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes, archived, onDelete, onArchived }) {
  return (
    <div className="note-list">
      {notes.map((note) =>
        note.archived === archived ? (
          <NoteItem
            key={note.id}
            note={note}
            archived={archived}
            onDelete={onDelete}
            onArchived={onArchived}
          />
        ) : null
      )}
    </div>
  );
}

export default NoteList;
