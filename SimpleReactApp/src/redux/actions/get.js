import {searchResults, setMovie, setFilteredMovies} from "./index"
//import store from "../store"

const apiURL = "https://reactjs-cdp.herokuapp.com/movies";

export function getMovies(query, sortBy, searchBy, sortOrder, filter){

    let URL = apiURL + '?search=' + query + '&searchBy=' + searchBy + '&sortBy=' + sortBy + '&sortOrder=' + sortOrder + '&filter=' + filter;
    
    //const data = null
    return dispatch => {
        fetch(URL, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        }).then((response) => { response.json().then((result) => { 
            if(filter){
                dispatch(setFilteredMovies(result.data));
            } else {
                dispatch(searchResults(result.data));
            }
        })
    }); 
    }
}

export function getMovieById(movieId){
         let URL = apiURL + "/" + movieId;
         return dispatch => {
            fetch(URL, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            }).then((response) => {
                response.json().then((result) => {
                    dispatch(setMovie(result));
                })
                
            })
        }
}

export function getCheckedFilterButton(filterInfo){
    return filterInfo.buttonList.filter(filter => filter.checked)[0].field;
}

export function updateMovieList(navigationFilterInfo, query, searchFilterInfo){
    const sortBy = getCheckedFilterButton(navigationFilterInfo);
    const searchBy = getCheckedFilterButton(searchFilterInfo);
    return dispatch => {
        dispatch(getMovies(query, sortBy, searchBy, "asc",""));
    }
}