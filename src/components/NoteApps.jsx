import React from "react";
import FormNote from "./FormNote";
import EmptyContainer from "./EmptyContainer";
import FormSearch from "./FormSearch";
import Notes from "./Notes";

class NoteApps extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [],
      search: "",
    };

    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchivedHandler = this.onArchivedHandler.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
  }

  onSubmitHandler({ title, body, archived }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title: title,
            body: body,
            archived: archived,
            createdAt: new Date().toISOString(),
          },
        ],
      };
    });
    console.log(this.state.notes);
  }

  onDeleteHandler(id) {
    const noteList = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes: noteList });
  }

  onArchivedHandler(id) {
    const noteList = this.state.notes.map((note) =>
      note.id === id ? { ...note, archived: !note.archived } : note
    );
    this.setState({ notes: noteList });
    console.log(noteList);
  }

  onSearchHandler(inputSearch) {
    this.setState(() => {
      return {
        search: inputSearch,
      };
    });
  }

  render() {
    const filterNote = this.state.notes.filter((note) =>
      note.title.toLowerCase().includes(this.state.search)
    );
    return (
      <div className="note-app">
        <h1>Notes App</h1>
        <FormNote addNote={this.onSubmitHandler} />
        {this.state.notes.length > 0 ? (
          <>
            <FormSearch
              search={this.state.search}
              onSearch={this.onSearchHandler}
            />
            <hr />
          </>
        ) : null}
        <h2>Notes</h2>
        {this.state.notes.length > 0 ? (
          <>
            {this.state.search.length > 0 ? (
              filterNote.length > 0 ? (
                <Notes
                  notes={filterNote}
                  onDeleteHandler={this.onDeleteHandler}
                  onArchivedHandler={this.onArchivedHandler}
                />
              ) : (
                <EmptyContainer nama={"Notes yang dicari"} />
              )
            ) : (
              <Notes
                notes={this.state.notes}
                onDeleteHandler={this.onDeleteHandler}
                onArchivedHandler={this.onArchivedHandler}
              />
            )}
          </>
        ) : (
          <EmptyContainer nama={"Notes"} />
        )}
      </div>
    );
  }
}

export default NoteApps;
