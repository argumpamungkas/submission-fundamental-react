/* eslint-disable react/prop-types */
import React from "react";

class FormNote extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
      archived: false,
      maxLength: 50,
    };

    this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
    this.onBodyChangeHandler = this.onBodyChangeHandler.bind(this);
    this.onArchivedChangeHandler = this.onArchivedChangeHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeHandler(event) {
    const lengthTitle = event.target.value.length;
    this.setState(() => {
      return {
        title: event.target.value,
        maxLength: 50 - lengthTitle,
      };
    });
  }

  onBodyChangeHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onArchivedChangeHandler(event) {
    this.setState(() => {
      return {
        archived: event.target.checked,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
  }

  render() {
    const maxChar = this.state.maxLength <= 15 ? "red-text" : "default-text";
    return (
      <div className="add-notes">
        <section>
          <h2>Add Note</h2>
          <form className="form-input" onSubmit={this.onSubmitEventHandler}>
            <input
              className="input-data"
              type="text"
              placeholder="Judul"
              value={this.state.title}
              onChange={this.onTitleChangeHandler}
              maxLength={50}
              required
            />
            <p className={maxChar}>
              {this.state.maxLength == 0
                ? "Max karakter!!!"
                : `Max Character : ${this.state.maxLength}`}
            </p>
            <textarea
              className="input-data"
              rows="10"
              cols="50"
              placeholder="Tuliskan Catatan disini..."
              value={this.state.body}
              onChange={this.onBodyChangeHandler}
              required
            />
            <div>
              <input
                type="checkbox"
                checked={this.state.archived}
                onChange={this.onArchivedChangeHandler}
                id="archived"
              />
              <label htmlFor="archived">Archived</label>
            </div>
            <button type="submit">Tambah</button>
          </form>
        </section>
      </div>
    );
  }
}

export default FormNote;
