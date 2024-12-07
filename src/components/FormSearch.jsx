/* eslint-disable react/prop-types */
import React from "react";

class FormSearch extends React.Component {
  constructor(props) {
    super(props);
    this.onSearchHandler = this.onSearchHandler.bind(this);
  }

  onSearchHandler(event) {
    this.props.onSearch(event.target.value);
  }

  render() {
    return (
      <div>
        <h2>Search</h2>
        <form className="form-search">
          <input
            className="input-search"
            type="text"
            placeholder="Search Note"
            value={this.props.search}
            onChange={this.onSearchHandler}
          />
        </form>
      </div>
    );
  }
}

export default FormSearch;
