import React from 'react'
import { storiesOf } from '@storybook/react';
import {configureStore} from '../src/redux/store';
import Filter from '../src/components/filter';

const store = configureStore();

const title = "SORT BY";
const type = "CHANGE_NAVIGATION_FILTERS";

const buttonList = [{
    id: 'f1',
    text: 'Release date',
    field: 'release_date',
    checked: true,
  }, {
    id: 'f2',
    text: 'rating',
    field: 'vote_average',
    checked: false,
}];

storiesOf('Filter', module)
.add('default', () => <Filter store={store} title={title} buttons={buttonList} type={type}/>)