import {CHANGE_FILTERS, SEARCH_RESULTS, GET_MOVIE} from "../constants/action-types";

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

export function getMovie(movie){
    return {
        type: GET_MOVIE,
        movie
    }
}