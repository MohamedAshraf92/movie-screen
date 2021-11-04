import {
  GET_TOP_RATED,
  GET_NOW_PLAYING,
  GET_UPCOMMING,
  ADD_FAVORITE,
  CLEAR_NOW_PLAYING,
  CLEAR_TOP_RATED,
  CLEAR_UPCOMMING,
  REMOVE_FAVORITE,
} from "../actions/actionTypes";

export const getTopRated = (movies) => {
  return {
    type: GET_TOP_RATED,
    movies,
  };
};

export const clearTopRated = () => {
  return {
    type: CLEAR_TOP_RATED,
  };
};

export const getUpcomming = (movies) => {
  return {
    type: GET_UPCOMMING,
    movies,
  };
};

export const clearUpcomming = () => {
  return {
    type: CLEAR_UPCOMMING,
  };
};

export const getNowPlaying = (movies) => {
  return {
    type: GET_NOW_PLAYING,
    movies,
  };
};

export const clearNowPlaying = () => {
  return {
    type: CLEAR_NOW_PLAYING,
  };
};

export const addFavorite = (movie) => {
  return {
    type: ADD_FAVORITE,
    movie,
  };
};

export const removeFavorite = (movie) => {
  return {
    type: REMOVE_FAVORITE,
    movie,
  };
};
