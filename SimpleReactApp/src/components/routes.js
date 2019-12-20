import React from 'react';
import SearchPage from './searchPage';
import DescriptionPage from './descriptionPage';

const NotFound = () => <p>404 Not found</p>;

const Routes = [
  {
    path: '/',
    exact: true,
    component: SearchPage,
  },
  {
    path: '/search',
    component: SearchPage,
  },
  {
    path: '/film/:id',
    component: DescriptionPage,
  },
  {
    component: NotFound,
  },
];

export default Routes;
