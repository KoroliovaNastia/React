import fetch from 'cross-fetch';
import { updateMovies, setMovie } from './index';

export function getMovies(queryPath){
  return fetch(`https://reactjs-cdp.herokuapp.com${queryPath}`)
    .then((response) => {
      return response.json().then((result) => {
        return result.data;
      });
    })
}
export function searchMovies(query, sortBy, searchBy, sortOrder, filter) {
  const queryPath = `/movies?limit=8&search=${
    query
  }&searchBy=${
    searchBy
  }&sortBy=${
    sortBy
  }&sortOrder=${
    sortOrder
  }&filter=${filter}`
  return (dispatch) => {
    const data = getMovies(queryPath);
        Promise.all([data]).then((result) => {
          dispatch(updateMovies(result[0]))
        });
  };
}

export function getMovieById(movieId) {
  return dispatch => {
    const data = movie(movieId);
    Promise.all([data]).then((result) => {
      dispatch(setMovie(result[0]));
    })
  };
}

export const movie = (movieId) =>{
  return fetch(`https://reactjs-cdp.herokuapp.com/movies/${movieId}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(response => {
    return response.json().then((result) => {
      return result;
    });
  })
}

export function getCheckedFilterButton(filterInfo) {
  return filterInfo.buttonList.filter((filter) => filter.checked)[0].field;
}

export function updateMovieList(navigationFilterInfo, query, searchFilterInfo) {
  const sortBy = getCheckedFilterButton(navigationFilterInfo);
  const searchBy = getCheckedFilterButton(searchFilterInfo);
  return (dispatch) => {
    dispatch(searchMovies(query, sortBy, searchBy, 'asc', ''));
  };
}
