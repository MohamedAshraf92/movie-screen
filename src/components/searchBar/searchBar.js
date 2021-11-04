import React, { useEffect, useState } from "react";
import axios from "axios";

import SearchResultCard from "../searchResultCard/searchResultCard";
import { BsSearch } from "react-icons/bs";

import "./searchBar.css";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);
  const [display, setDisplay] = useState("none");
  const [resultsCount, setResultsCount] = useState(8);

  const searchHandler = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=5539dd1f8287152398f06a59d3354009&language=en-US&query=${search}`
      )
      .then((res) => {
        console.log(res.data);
        setResult(res.data.results.splice(0, resultsCount));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    search === "" ? setDisplay("none") : searchHandler();
  }, [search]);

  useEffect(() => {
    result.length !== 0 && search !== "" && setDisplay("flex");
  }, [result, search]);

  return (
    <div className="search-bar">
      <div className="input-group">
        <input
          type="text"
          className="search-input"
          value={search}
          placeholder="Search for your movie"
          onChange={(e) => setSearch(e.target.value)}
          onBlur={() => {
            setSearch("");
            setResult([]);
            setDisplay("none");
          }}
        />
        <BsSearch className="search-icon" />
      </div>
      <div className="search-result" style={{ display: display }}>
        {result.length === 0 ? (
          <h3 className="no-result">No Reasult Found</h3>
        ) : (
          result.map((movie) => {
            return <SearchResultCard key={movie.id} movie={movie} />;
          })
        )}
      </div>
    </div>
  );
};

export default SearchBar;
