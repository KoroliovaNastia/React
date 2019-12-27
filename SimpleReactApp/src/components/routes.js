import React from 'react';
import SearchPage, { loadSearchData } from './searchPage';
import DescriptionPage, { loadDescriptionData } from './descriptionPage';
// import { getMovieById, movie, getAllMovies } from '../redux/actions/get';

const NotFound = () => <p>404 Not found</p>;

const routes = [
  {
    path: '/',
    exact: true,
    component: SearchPage,
    loadData: (param) => loadSearchData(param),
  },
  {
    path: '/movies*',
    component: SearchPage,
    loadData: (param) => loadSearchData(param),
  },
  {
    path: '/film/:id',
    component: DescriptionPage,
    loadData: (param) => loadDescriptionData(param),
  },
  {
    component: NotFound,
  },
];

export default routes;
