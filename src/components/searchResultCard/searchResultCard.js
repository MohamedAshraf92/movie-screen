import React, { useState } from "react";
import moment from "moment";

import "./searchResultCard.css";

const SearchResultCard = (props) => {
  const { movie } = props;
  const poster = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <div
      className="search-result-card"
      style={{ backgroundImage: `url(${poster})` }}
    >
      <div className="movie-data-wrapper">
        <span className="result-release-date">
          {moment(movie.release_date).format("MMM YYYY")}
        </span>
        <span className="result-movie-title">{movie.title}</span>
      </div>
    </div>
  );
};

export default SearchResultCard;
