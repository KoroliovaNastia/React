import {combineReducers} from 'redux'
import {CHANGE_NAVIGATION_FILTERS, CHANGE_SEARCH_FILTERS, SEARCH_RESULTS, SET_MOVIE, CHANGE_QUERY, FILTERED_BY_GENRE} from "../constants/action-types"

const initialMovieState = {
    movieList: null,
    movie: null,
    filteredMoviesByGenre: null
}

const initialFilterState = {
    searchFilterInfo: {type: "CHANGE_SEARCH_FILTERS", title : "search by", buttonList: [{id: "b1", text: "title", field: "title", checked: true}, {id: "b2", text: "genre", field: "genres", checked: false}]},
    navigationFilterInfo: {type: "CHANGE_NAVIGATION_FILTERS", title: "sort by", buttonList: [{id: "f1", text: "Release date", field: "release_date", checked: true}, {id: "f2", text: "rating", field: "vote_average", checked: false}]},
    query: ""
}

function movieReducer(state = initialMovieState, action){
    if (action.type === SEARCH_RESULTS) {
        return { ...state, movieList: action.movieList};
    }
    if (action.type === SET_MOVIE) {
        return {...state, movie: action.movie};
    }
    if (action.type === FILTERED_BY_GENRE) {
        return {...state, filteredMoviesByGenre: action.filteredMovies}
    }
    return state;
}

function filterReducer(state = initialFilterState, action){
    if (action.type === CHANGE_SEARCH_FILTERS){
        return { ...state, searchFilterInfo: { ...state.searchFilterInfo, buttonList: action.filters}}
    }
    if (action.type === CHANGE_NAVIGATION_FILTERS){
        return { ...state, navigationFilterInfo: { ...state.navigationFilterInfo, buttonList: action.filters}}
    }
    if (action.type === CHANGE_QUERY) {
        return {...state, query: action.query};
    }
    return state;
}

const rootReducer = combineReducers({
    movieState: movieReducer,
    filterState: filterReducer
});

export default rootReducer