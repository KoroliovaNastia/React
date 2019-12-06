import {combineReducers} from 'redux'
import {CHANGE_FILTERS, SEARCH_RESULTS, GET_MOVIE} from "../constants/action-types"

const initialState = {
    filters: {
        searchFilterInfo: {type: "searchFilterInfo", title : "search by", buttonList: [{id: "b1", text: "title", checked: true}, {id: "b2", text: "genre", checked: false}]},
        navigationFilterInfo: {type: "navigationFilterInfo", title: "sort by", buttonList: [{id: "f1", text: "Release date", checked: true}, {id: "f2", text: "rating", checked: false}]}
    },
    movieList: [],
    movieListByGenre: [], 
    movie: null
}

function movieReducer(state = initialState, action){
    if (action.type === SEARCH_RESULTS) {
        return { ...state, movieList: action.movieList};
    }
    if (action.type === GET_MOVIE) {
        return {...state, movie: action.movie};
    }
    return state;
}

function filterReducer(state = initialState, action){
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