import {combineReducers} from 'redux'
import {CHANGE_FILTERS, SEARCH_RESULTS, SET_MOVIE, CHANGE_QUERY} from "../constants/action-types"

const initialMovieState = {
    movieList: null,
    movie: null,
    query: ""
}

const initialFilterState = {
    filters: {
        searchFilterInfo: {type: "searchFilterInfo", title : "search by", buttonList: [{id: "b1", text: "title", checked: true}, {id: "b2", text: "genre", checked: false}]},
        navigationFilterInfo: {type: "navigationFilterInfo", title: "sort by", buttonList: [{id: "f1", text: "Release date", checked: true}, {id: "f2", text: "rating", checked: false}]}
    }
}

function movieReducer(state = initialMovieState, action){
    if (action.type === SEARCH_RESULTS) {
        return { ...state, movieList: action.movieList};
    }
    if (action.type === SET_MOVIE) {
        return {...state, movie: action.movie};
    }
    if (action.type === CHANGE_QUERY) {
        return {...state, query: action.query};
    }
    return state;
}

function filterReducer(state = initialFilterState, action){
    if (action.type === CHANGE_FILTERS){
        return { ...state, filters: action.filters}
    }
    return state;
}

const rootReducer = combineReducers({
    movieState: movieReducer,
    filterState: filterReducer
});

export default rootReducer