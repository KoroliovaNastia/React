import {SEARCH_RESULTS, SET_MOVIE, CHANGE_QUERY, FILTERED_BY_GENRE} from "../constants/action-types";

export function updateFilters(type, filters) {
    return { 
        type, 
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

export function setFilteredMovies(filteredMovies) {
    return {
        type: FILTERED_BY_GENRE,
        filteredMovies
    }
}