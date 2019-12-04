const initialState = {
    filters: {
        searchFilterInfo: {type: "searchFilterInfo", title : "search by", buttonList: [{id: "b1", text: "title", checked: true}, {id: "b2", text: "genre", checked: false}]},
        navigationFilterInfo: {type: "navigationFilterInfo", title: "sort by", buttonList: [{id: "f1", text: "Release date", checked: true}, {id: "f2", text: "rating", checked: false}]}
    }
}

function rootReducer(state = initialState, action){
    return state;
};

export default rootReducer