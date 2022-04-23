import React from "react";
import "../App.css";
import { useNavigate, useParams } from "react-router-dom";
import data from "../data";

const Trailer = () => {
  let navigate = useNavigate();
  let { id } = useParams();
  const movie = data[id - 1];
  const { trailerUrl, title, description } = movie;
  return (
    <div>
      <h3 className="trailer-heading">{title}:</h3>
      <h4 className="trailer-sub-heading">Trailer and Synopsis</h4>
      <div>
        <div class="card mb-3 trailer-card">
          <div>{trailerUrl}</div>
          <div class="card-body">
            <p class="card-text">{description}</p>
          </div>
        </div>
      </div>{" "}
      <div className="btn-home">
        <button
          type="button"
          class="btn btn-primary"
          onClick={() => {
            navigate("/");
          }}
        >
          Go To Home Page
        </button>
      </div>
    </div>
  );
};

export default Trailer;
