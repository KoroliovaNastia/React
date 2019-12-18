import {updateMovies, setMovie} from "./index";
import {call, put, all} from 'redux-saga/effects';
import fetch from 'cross-fetch'

const apiURL = "https://reactjs-cdp.herokuapp.com/movies";

export function* searchMovies(query, sortBy, searchBy, sortOrder, filter){

    //let URL = apiURL + '?search=' + query + '&searchBy=' + searchBy + '&sortBy=' + sortBy + '&sortOrder=' + sortOrder + '&filter=' + filter;
    const response = yield call(fetch, `https://reactjs-cdp.herokuapp.com/movies?search=${query}&searchBy=${searchBy}&sortBy=${sortBy}&sortOrder=${sortOrder}&filter=${filter}`)
    const result = yield response.json();
    yield put (updateMovies(result.data))
    // return dispatch => {
    //     fetch(URL, {
    //         method: 'GET',
    //         headers: {
    //             Accept: 'application/json',
    //             'Content-Type': 'application/json'
    //         }
    //     }).then((response) => { response.json().then((result) => { 
    //             dispatch(updateMovies(result.data));
    //     })
    // }); 
    // }
}

export function* getMovieById(movieId){
    const response = yield call(fetch, `https://reactjs-cdp.herokuapp.com/movies/${movieId}`)
    const result = yield response.json();
    yield put(setMovie(result))
        //  let URL = apiURL + "/" + movieId;
        //  return dispatch => {
        //     fetch(URL, {
        //         method: 'GET',
        //         headers: {
        //             Accept: 'application/json',
        //             'Content-Type': 'application/json'
        //         }
        //     }).then((response) => {
        //         response.json().then((result) => {
        //             dispatch(setMovie(result));
        //         })
                
        //     })
        // }
}

export function getCheckedFilterButton(filterInfo){
    return filterInfo.buttonList.filter(filter => filter.checked)[0].field;
}

export function updateMovieList(navigationFilterInfo, query, searchFilterInfo){
    const sortBy = getCheckedFilterButton(navigationFilterInfo);
    const searchBy = getCheckedFilterButton(searchFilterInfo);
    return dispatch => {
        dispatch(searchMovies(query, sortBy, searchBy, "asc",""));
    }
}

export function* rootSaga() {
    yield all([
        searchMovies()
    ])
  }