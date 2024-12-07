/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

function NoteItem({ note, archived, onDelete, onArchived }) {
  const id = note.id;
  return (
    <>
      <div className="note-item">
        <section>
          <h3>{note.title}</h3>
          <p>{note.body}</p>
        </section>
        <section>
          <button
            className="btn-delete"
            type="submit"
            onClick={() => onDelete(note.id)}
          >
            Delete
          </button>
          <button
            className="btn-archived"
            type="submit"
            onClick={() => onArchived(note.id)}
          >
            {archived ? "Unarchived" : "Archived"}
          </button>
        </section>
      </div>
    </>
  );
}

export default NoteItem;
