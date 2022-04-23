import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import Trailers from "./pages/trailers";
import Trailer from "./pages/trailer";
import ErrorPage from "./pages/errorPage";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import MovieCard from "./components/moviecard";
import data from "./data";
import NavOnly from "./components/navOnly";
import { useState, useEffect } from "react";

function App() {
  const movieElements = data.map((val) => (
    <MovieCard key={val.id} item={val} />
  ));

  const [movies, setMovies] = useState(movieElements);

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
    <Router>
      <NavOnly
        home={
          <Link to="/" style={{ textDecoration: "none", color: "grey" }}>
            Home
          </Link>
        }
        trailers={
          <Link
            to="/trailers"
            style={{ textDecoration: "none", color: "grey" }}
          >
            Trailers
          </Link>
        }
        handleChange={searchMovies}
        updateField={search}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trailers" element={<Trailers />} />
        <Route path="/trailers/:id" element={<Trailer />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
