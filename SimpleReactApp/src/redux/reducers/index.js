import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import {
  CHANGE_NAVIGATION_FILTERS, CHANGE_SEARCH_FILTERS, UPDATE_MOVIES, SET_MOVIE, CHANGE_QUERY,
} from '../constants/action-types';

const initialMovieState = {
  movieList: null,
  movie: null,
};

const initialFilterState = {
  searchFilterInfo: {
    type: 'CHANGE_SEARCH_FILTERS',
    title: 'SEARCH BY',
    buttonList: [{
      id: 'b1', text: 'title', field: 'title', checked: true,
    }, {
      id: 'b2', text: 'genre', field: 'genres', checked: false,
    }],
  },
  navigationFilterInfo: {
    type: 'CHANGE_NAVIGATION_FILTERS',
    title: 'SORT BY',
    buttonList: [{
      id: 'f1', text: 'Release date', field: 'release_date', checked: true,
    }, {
      id: 'f2', text: 'rating', field: 'vote_average', checked: false,
    }],
  },
  query: '',
};

const initialAppState = {
  searchButtonText: 'SEARCH',
  logo: 'netflixroulete',
};

export function movieReducer(state = initialMovieState, action) {
  if (action.type === UPDATE_MOVIES) {
    return { ...state, movieList: action.movieList };
  }
  if (action.type === SET_MOVIE) {
    return { ...state, movie: action.movie };
  }

  return state;
}

export function filterReducer(state = initialFilterState, action) {
  if (action.type === CHANGE_SEARCH_FILTERS) {
    return { ...state, searchFilterInfo: { ...state.searchFilterInfo, buttonList: action.filters } };
  }
  if (action.type === CHANGE_NAVIGATION_FILTERS) {
    return { ...state, navigationFilterInfo: { ...state.navigationFilterInfo, buttonList: action.filters } };
  }
  if (action.type === CHANGE_QUERY) {
    return { ...state, query: action.query };
  }
  return state;
}

function appReducer(state = initialAppState, action) {
  return state;
}

const rootReducer = combineReducers({
  movieState: movieReducer,
  filterState: filterReducer,
  appState: appReducer,
  routing: routerReducer,
});

export default rootReducer;
