import {FILTER_MOVIES, SEARCH_RESULTS} from "../constants/action-types";

export function fiterMovies(payload) {
    return { 
        type: FILTER_MOVIES, 
        payload }
  };

export function searchResults(results) {
    return {
        type: SEARCH_RESULTS,
        results
    }
};  