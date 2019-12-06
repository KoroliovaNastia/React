import {CHANGE_FILTERS, SEARCH_RESULTS, SET_MOVIE, CHANGE_QUERY} from "../constants/action-types";

export function fiterMovies(filters) {
    return { 
        type: CHANGE_FILTERS, 
        filters 
    }
  };

export function searchResults(movieList) {
    return {
        type: SEARCH_RESULTS,
        movieList
    }
};

export function setMovie(movie){
    return {
        type: SET_MOVIE,
        movie
    }
}

export function changeQuery(query){
    return {
        type: CHANGE_QUERY,
        query
    }
}