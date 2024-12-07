/* eslint-disable react/prop-types */
import EmptyContainer from "./EmptyContainer";
import NoteList from "./NoteList";

function Notes({ notes, onDeleteHandler, onArchivedHandler }) {
  return (
    <>
      {Array.isArray(notes) && notes.some((note) => !note.archived) ? (
        <NoteList
          notes={notes}
          archived={false}
          onDelete={onDeleteHandler}
          onArchived={onArchivedHandler}
        />
      ) : (
        <EmptyContainer nama={"Notes"} />
      )}
      <hr />
      <h2>Archived</h2>
      {Array.isArray(notes) && notes.some((note) => note.archived) ? (
        <NoteList
          notes={notes}
          archived={true}
          onDelete={onDeleteHandler}
          onArchived={onArchivedHandler}
        />
      ) : (
        <EmptyContainer nama={"Archived"} />
      )}
    </>
  );
}

export default Notes;
