import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import {
  clearNowPlaying,
  clearTopRated,
  clearUpcomming,
  getNowPlaying,
  getTopRated,
  getUpcomming,
} from "../../store/actions/moviesActions";
import MovieCard from "../../components/movieCard/movieCard";
import spinner from "../../assets/images/spinner.png";

import "./home.css";

const Home = () => {
  const topRatedMovies = useSelector((state) => state.movies.topRated);
  const upcommingMovies = useSelector((state) => state.movies.upcomming);
  const nowPlayingMovies = useSelector((state) => state.movies.nowPlaying);

  const [movies, setMovies] = useState([]);
  const [moviesList, setMoviesList] = useState("top_rated");
  const [page, setPage] = useState(1);
  const [toggleState, setToggleState] = useState(1);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const toggleTab = (index) => {
    setToggleState(index);
  };

  useEffect(() => {
    dispatch(clearNowPlaying());
    // eslint-disable-next-line
    dispatch(clearUpcomming());
    // eslint-disable-next-line
    dispatch(clearTopRated());
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${moviesList}?api_key=5539dd1f8287152398f06a59d3354009&language=en-US&page=${page}`
      )
      .then((res) => {
        moviesList === "top_rated"
          ? dispatch(getTopRated(res.data.results))
          : moviesList === "upcoming"
          ? dispatch(getUpcomming(res.data.results))
          : dispatch(getNowPlaying(res.data.results));
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [moviesList, page]);

  useEffect(() => {
    moviesList === "top_rated"
      ? setMovies(topRatedMovies)
      : moviesList === "upcoming"
      ? setMovies(upcommingMovies)
      : setMovies(nowPlayingMovies);
  }, [topRatedMovies, upcommingMovies, nowPlayingMovies]);

  return (
    <Fragment>
      <ul className="home-tabs">
        <li
          className={
            toggleState === 1 ? "tab-item tab-item-active" : "tab-item"
          }
          onClick={() => {
            setMoviesList("top_rated");
            toggleTab(1);
            setPage(1);
            dispatch(clearNowPlaying());
            dispatch(clearUpcomming());
          }}
        >
          Top Rated
        </li>
        <li className="seperator">/</li>
        <li
          className={
            toggleState === 2 ? "tab-item tab-item-active" : "tab-item"
          }
          onClick={() => {
            setMoviesList("upcoming");
            toggleTab(2);
            setPage(1);
            dispatch(clearTopRated());
            dispatch(clearNowPlaying());
          }}
        >
          Upcomming
        </li>
        <li className="seperator">/</li>
        <li
          className={
            toggleState === 3 ? "tab-item tab-item-active" : "tab-item"
          }
          onClick={() => {
            setMoviesList("now_playing");
            toggleTab(3);
            setPage(1);
            dispatch(clearTopRated());
            dispatch(clearUpcomming());
          }}
        >
          Now Playing
        </li>
      </ul>
      {movies.length === 0 ? (
        <section className="spinner-container">
          <img className="spinner" src={spinner} alt="spinner" />
          <h1>Loading...</h1>
        </section>
      ) : (
        <section className="cards-container-wrapper">
          <div className="cards-container">
            {movies.map((movie) => {
              return <MovieCard key={movie.id} movie={movie} />;
            })}
          </div>
          {loading ? (
            <button className="load-btn-loading" disabled>
              <img className="spinner" src={spinner} alt="spinner" />
            </button>
          ) : (
            <button
              className="load-btn"
              onClick={() => {
                setLoading(true);
                setPage(page + 1);
              }}
            >
              Load More
            </button>
          )}
        </section>
      )}
    </Fragment>
  );
};

export default Home;
