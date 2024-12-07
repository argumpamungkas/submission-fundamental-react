/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

function NoteItem({ note, archived, onDelete, onArchived }) {
  const date = new Date(note.createdAt);
  const showDate = `${date.getDate().toString().padStart(2, "0")}-${(
    date.getMonth() + 1
  )
    .toString()
    .padStart(2, "0")}-${date.getFullYear()} ${date
    .getHours()
    .toString()
    .padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")}`;
  return (
    <>
      <div className="note-item">
        <section>
          <h3>{note.title}</h3>
          <p>{note.body}</p>
          <p className="date-text">Create: {showDate}</p>
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
