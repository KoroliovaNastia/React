import {updateMovies, setMovie} from "./index"

const apiURL = "https://reactjs-cdp.herokuapp.com/movies";

export function searchMovies(query, sortBy, searchBy, sortOrder, filter){

    let URL = apiURL + '?search=' + query + '&searchBy=' + searchBy + '&sortBy=' + sortBy + '&sortOrder=' + sortOrder + '&filter=' + filter;
    
    return dispatch => {
        fetch(URL, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        }).then((response) => { response.json().then((result) => { 
                dispatch(updateMovies(result.data));
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
        dispatch(searchMovies(query, sortBy, searchBy, "asc",""));
    }
}