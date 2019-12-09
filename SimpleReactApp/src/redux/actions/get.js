import {searchResults, setMovie, setFilteredMovies} from "./index"
import store from "../store"

const apiURL = "https://reactjs-cdp.herokuapp.com/movies";

export function getMovies(query, sortBy, searchBy, filter){

    let URL = apiURL + '?search=' + query + '&searchBy=' + searchBy + '&sortBy=' + sortBy + '&filter=' + filter;
    
    const data = null
    //return dispatch => {
        fetch(URL, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            response.json().then((result) => {
                if(filter)
                    store.dispatch(setFilteredMovies(result.data));
                else
                    store.dispatch(searchResults(result.data));
            })
        })   
    //}
}

export function getMovieById(movieId){
         let URL = apiURL + "/" + movieId;
         //return dispatch => {
            fetch(URL, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            }).then((response) => {
                response.json().then((result) => {
                    store.dispatch(setMovie(result));
                })
                
            })
        //}
}

export function getCheckedFilterButton(filterInfo){
    return filterInfo.buttonList.filter(filter => filter.checked)[0].text.replace(' ', '_').toLowerCase();
}