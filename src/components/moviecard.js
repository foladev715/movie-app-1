import React from "react";
import { Link } from "react-router-dom";

function MovieCard(props) {
  return (
    <div className="movie-card card">
      <div className="card-body">
        <Link to={`/trailers/${props.item.id}`}>
          <img src={props.item.imageUrl} className="card-img-top" alt="..." />
        </Link>
        <h5 className="card-title">{props.item.title}</h5>
        <p className="card-text">{props.item.description}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Rating: {props.item.rating}</li>
      </ul>
    </div>
  );
}

export default MovieCard;
