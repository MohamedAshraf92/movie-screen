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

const initialState = {
  topRated: [],
  upcomming: [],
  nowPlaying: [],
  favorites: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TOP_RATED:
      return {
        ...state,
        topRated: state.topRated.concat(action.movies),
      };

    case CLEAR_TOP_RATED:
      return {
        ...state,
        topRated: [],
      };

    case GET_UPCOMMING:
      return {
        ...state,
        upcomming: state.upcomming.concat(action.movies),
      };

    case CLEAR_UPCOMMING:
      return {
        ...state,
        upcomming: [],
      };

    case GET_NOW_PLAYING:
      return {
        ...state,
        nowPlaying: state.nowPlaying.concat(action.movies),
      };

    case CLEAR_NOW_PLAYING:
      return {
        ...state,
        nowPlaying: [],
      };

    case ADD_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.concat(action.movie),
      };

    case REMOVE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter((e) => e.id !== action.movie.id),
      };

    default:
      return state;
  }
};

export default reducer;
