import React from 'react'
import { storiesOf } from '@storybook/react';
import {configureStore} from '../src/redux/store';
import Movie from '../src/components/movie';
import image from '../src/images/file.jpg';
import { Router } from 'react-router'
import { Provider } from 'react-redux'
import { createMemoryHistory } from 'history'
import {Route} from 'react-router-dom';

const movie = {

    id: '1',
    image: image,
    title: 'Not yet...',
    genres: ['Adventure'],
    release_date: '2022',
    vote_average: 5,
    runtime: 154,
    description: '',

}

const store = configureStore();

const history = createMemoryHistory('/')

const withProvider = (story) => (
    <Provider store={store}>
        <Router history={history}>
            {story}
        </Router>
    </Provider>
)

const Box = () => <Movie movie={movie}/>

storiesOf('Movie', module)
.addDecorator(withProvider)
.add('default', () => <Route component={Box}/>)
