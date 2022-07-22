import React from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";
import TrailerComp from "../components/trailerComp";
import data from "../data";

const Trailers = () => {
  let navigate = useNavigate();
  const trailerElements = data.map((val) => (
    <TrailerComp key={val.id} item={val} />
  ));
  return (
    <div>
      <br />
      {trailerElements}
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

export default Trailers;
