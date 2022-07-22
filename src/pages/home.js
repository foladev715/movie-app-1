import "../App.css";
import { useState } from "react";
import MovieCard from "../components/moviecard";
import Filter from "../components/filter";
import data from "../data";
import React from "react";
import NewMovie from "../components/newmovie";
import SearchBar from "../components/searchBar";

function Home() {
  const movieElements = data.map((val) => (
    <MovieCard key={val.id} item={val} />
  ));

  const [movies, setMovies] = useState(movieElements);
  const [checkBox, setCheckBox] = useState({ isSelected: "" });

  function filterMovies(event) {
    const { value, checked } = event.target;
    const filtered = data.filter(
      (el) => el.rating === value || value.includes(el.title.charAt(0))
    );
    setCheckBox({ isSelected: value });
    console.log(filtered);

    if (filtered.length > 0) {
      setMovies(
        checked
          ? filtered.map((val) => <MovieCard key={val.id} item={val} />)
          : movieElements
      );
    } else {
      setMovies("No Movies Found");
    }
  }

  function clearFilter() {
    setMovies(movieElements);
    setCheckBox((prevValue) => !prevValue);
  }

  const [addMovies, setAddMovies] = useState(false);

  function toggleAddMovies() {
    setAddMovies((prevValue) => !prevValue);
  }

  const [formData, setFormData] = useState({
    title: "",
    rating: "",
    description: "",
    imageUrl: "",
  });

  function addFormData(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  function submitForm(event) {
    event.preventDefault();
    data.push(formData);
    setMovies(movieElements);
  }

  const [search, setSearch] = useState("");

  function searchMovies(event) {
    const { value } = event.target;
    setSearch(value);
    const searched = data.filter(
      (el) =>
        el.title.toLowerCase().includes(value) ||
        el.title.toUpperCase().includes(value)
    );
    if (searched.length > 0) {
      setMovies(searched.map((val) => <MovieCard key={val.id} item={val} />));
    } else {
      setMovies("No Movies Found");
    }
  }

  return (
    <div className="app">
      <SearchBar handleChange={searchMovies} updateField={search} />
      <br />
      <div className="app_body">
        <div className="movie_card">{movies}</div>
        <div className="filter_add">
          <Filter
            handleChange={filterMovies}
            checkStatus={checkBox.isSelected}
            handleClick={clearFilter}
          />
          <br />
          <button
            type="button"
            className="btn btn-success"
            onClick={toggleAddMovies}
          >
            Add Your Favourite Movies!
          </button>
          {addMovies && (
            <NewMovie
              updateForm={formData}
              handleChange={addFormData}
              handleSubmit={submitForm}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
