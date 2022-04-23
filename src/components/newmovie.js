import React from "react";

const NewMovie = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <div className="mb-3 new-movie-form">
          <label htmlFor="text" className="form-label">
            Title of Movie
          </label>
          <input
            type="text"
            className="form-control"
            value={props.handleChange.title}
            name="title"
            onChange={props.handleChange}
          />
          <label htmlFor="text" className="form-label">
            Rating
          </label>
          <input
            type="text"
            className="form-control"
            value={props.handleChange.rating}
            name="rating"
            onChange={props.handleChange}
          />
          <label htmlFor="text" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            value={props.handleChange.description}
            name="description"
            onChange={props.handleChange}
          />
          <label htmlFor="text" className="form-label">
            Image URL
          </label>
          <input
            type="text"
            className="form-control"
            value={props.handleChange.imageUrl}
            name="imageUrl"
            onChange={props.handleChange}
          />
        </div>
        <button type="submit" className="btn btn-success">
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewMovie;
