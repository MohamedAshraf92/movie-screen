import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

import { addFavorite, removeFavorite } from "../../store/actions/moviesActions";

import { HiOutlineStar } from "react-icons/hi";
import { AiFillStar } from "react-icons/ai";

import "./movieCard.css";

const MovieCard = (props) => {
  const { movie } = props;
  const [favorite, setFavorite] = useState(false);
  const favoriteMovies = useSelector((state) => state.movies.favorites);

  const dispatch = useDispatch();

  const checkFavoriteHandler = () => {
    const isFavorite =
      favoriteMovies.filter((el) => el.id === movie.id).length !== 0;
    setFavorite(isFavorite);
  };

  useEffect(() => {
    checkFavoriteHandler();
  }, []);

  useEffect(() => {
    checkFavoriteHandler();
  }, [favoriteMovies]);

  const poster = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <div className="movie-card" style={{ backgroundImage: `url(${poster})` }}>
      <div className="movie-data-wrapper">
        <span className="release-date">
          {moment(movie.release_date).format("MMM YYYY")}
        </span>
        <span className="movie-title">{movie.title}</span>
      </div>
      {favorite ? (
        <AiFillStar
          className="bookmark"
          onClick={() => {
            dispatch(removeFavorite(movie));
          }}
        />
      ) : (
        <HiOutlineStar
          className="bookmark"
          onClick={() => {
            dispatch(addFavorite([movie]));
          }}
        />
      )}
    </div>
  );
};

export default MovieCard;
