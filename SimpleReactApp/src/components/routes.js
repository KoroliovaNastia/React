import React from 'react';
import SearchPage from './searchPage';
import DescriptionPage from './descriptionPage';
import { getMovieById, movie, getAllMovies } from '../redux/actions/get';


const NotFound = () => <p>404 Not found</p>;

const routes = [
  {
    path: '/',
    exact: true,
    ...SearchPage,
  },
  {
    path: '/movies*',
    ...SearchPage,
  },
  {
    path: '/film/:id',
    ...DescriptionPage,
  },
  {
    component: NotFound,
  },
];

export default routes;
