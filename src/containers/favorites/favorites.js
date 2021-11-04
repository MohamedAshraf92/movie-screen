import React from "react";
import { useSelector } from "react-redux";

import MovieCard from "../../components/movieCard/movieCard";

import "./favorites.css";

const Favorites = () => {
  const favoriteMovies = useSelector((state) => state.movies.favorites);

  return favoriteMovies.length === 0 ? (
    <section className="spinner-container">
      <h1>You Don't Have Favorite Movies Yet</h1>
    </section>
  ) : (
    <section className="favorite-container">
      {favoriteMovies.map((movie) => {
        return <MovieCard key={movie.id} movie={movie} />;
      })}
    </section>
  );
};

export default Favorites;
