import {FILTER_MOVIES, SEARCH_RESULTS} from "../constants/action-types"

const initialState = {
    filters: {
        searchFilterInfo: {type: "searchFilterInfo", title : "search by", buttonList: [{id: "b1", text: "title", checked: true}, {id: "b2", text: "genre", checked: false}]},
        navigationFilterInfo: {type: "navigationFilterInfo", title: "sort by", buttonList: [{id: "f1", text: "Release date", checked: true}, {id: "f2", text: "rating", checked: false}]}
    },
    movieList: []
}

function rootReducer(state, action){
    if (action.type === SEARCH_RESULTS) {
        return Object.assign({}, state, {movieList: action.result});
    }
    return state;
};

export default rootReducer