import {searchResults, setMovie} from "./index"
import store from "../store"

const apiURL = "https://reactjs-cdp.herokuapp.com/movies";

export function getMovies(query, sortBy, searchBy, filter){

    let URL = apiURL + '?search=' + query + '&searchBy=' + searchBy + '&sortBy=' + sortBy + '&filter=' + filter;
    
    //return dispatch => {
        fetch(URL, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            response.json().then((result) => {
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