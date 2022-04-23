import React from "react";
import { Link } from "react-router-dom";

function SearchBar(props) {
  return (
    <div className="container">
      <form className="d-flex" onSubmit={props.handleSubmit}>
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={props.updateField}
          onChange={props.handleChange}
        />
      </form>
    </div>
  );
}

export default SearchBar;
