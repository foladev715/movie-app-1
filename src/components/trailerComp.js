import React from "react";
import "../index.css";

export default function TrailerComp(props) {
  return (
    <div>
      <div class="card mb-3 trailer-card">
        <div>{props.item.trailerUrl}</div>
        <div class="card-body">
          <h5 class="card-title">{props.item.title}</h5>
          <p class="card-text">{props.item.description}</p>
        </div>
      </div>
      <div className="hr"></div>
    </div>
  );
}
