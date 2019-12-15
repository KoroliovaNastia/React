import configureStore from 'redux-mock-store';
import * as actions from '../src/redux/actions/get'
import * as reduxActions from '../src/redux/actions/index';
import * as types from '../src/redux/constants/action-types';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock'
import React from 'react';
import { configure, mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import {movieReducer, filterReducer} from '../src/redux/reducers/index'
import JestMock from 'jest-mock';

configure({ adapter: new Adapter() });

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

describe('redux actions', () => {
    afterEach(() => {
        fetchMock.restore();
    })

    it('should create an action to change query', () => {
        const query = 'new query';
        const expectedAction = {
            type: types.CHANGE_QUERY,
            query
        }

        expect(reduxActions.changeQuery(query)).toEqual(expectedAction)
    })

    //it('should update movieList in store', () => {
        // fetchMock.get('/movies', {
        //     movieList: {movies : ['new movies']},
        //     method: 'GET',
        //     headers: {
        //         Accept: 'application/json',
        //         'Content-Type': 'application/json'
        //     }
        // })

        // const expectedAction = {type: types.SEARCH_RESULTS, movieList: {movies : ['new movies']}}
        // const store = mockStore({ movieList: [], dispatch: jest.fn() })

        // return store.dispatch(actions.searchMovies('', '', '', '', '')).then((data) => {
        //     expect(store.getActions()).toEqual(expectedAction)
        // })
       // const r = actions.searchMovies('', '', '', 'asc', '')
        //store.dispatch = r
       // store.dispatch(r);
        //expect(store.getActions()).toEqual(null);
    //})

    // it('should getMovie', () => {
    //     // fetchMock.get('/movies/1', {
    //     //     movie: {movie: {id: 1}},
    //     //     headers: {
    //     //         Accept: 'application/json',
    //     //         'Content-Type': 'application/json',
    //     //         movieId: 1
    //     //     },
    //     //     response: {
    //     //         movieId: 1,
    //     //         headers: {
    //     //           ['Content-Type']: 'application/json'
    //     //         },
    //     //         body: {movie: {id: 1}},
    //     //         sendAsJson: true
    //     //       }
    //     // })

    //     const expectedAction = {type: types.SET_MOVIE, movie: {movie: {id: 1}}}
    //     const store = mockStore({movie: [], dispatch: jest.fn()  })

    //     const response = store.dispatch(actions.getMovieById(1))
    //     expect(store.getActions()).toEqual(expectedAction)
        
    // })
})

describe('movie reducer', () => {
    const movieState = {
        movieList: null,
        movie: null
    }
    
    it('should return initialMovieState', () => {
        expect(movieReducer(undefined, {})).toEqual(
            movieState
        )
    })
    
    it('should handle SEARCH_RESULTS action', () => {
        expect(
            movieReducer(
                movieState,
                {
                    type: types.SEARCH_RESULTS,
                    movieList: [{id: 'movie1', title: 'test movie 1'}]
                }
            )).toEqual({
                movieList: [{id: 'movie1', title: 'test movie 1'}],
                movie: null
            })
    })

    it('should handle SET_MOVIE action', () => {
        expect(movieReducer(
            movieState,
            {
                type: types.SET_MOVIE,
                movie: {id: 'movie2', title: 'test movie 2'}
            }
        )).toEqual({
            movieList: null,
            movie: {id: 'movie2', title: 'test movie 2'}
        })
    })
})

describe('filter reducer', () => {
    const filterState = {
        searchFilterInfo: {type: "CHANGE_SEARCH_FILTERS", title : "search by", buttonList: [{id: "b1", text: "title", field: "title", checked: true}, {id: "b2", text: "genre", field: "genres", checked: false}]},
        navigationFilterInfo: {type: "CHANGE_NAVIGATION_FILTERS", title: "sort by", buttonList: [{id: "f1", text: "Release date", field: "release_date", checked: true}, {id: "f2", text: "rating", field: "vote_average", checked: false}]},
        query: ""
    }

    it('should return initialFilterState', () => {
        expect(filterReducer(undefined, {})).toEqual(
            filterState
        )
    })

    it('should handle CHANGE_QUERY action', () => {
        expect(filterReducer(
            filterState,
            {
                type: types.CHANGE_QUERY,
                query: "test search query"
            }
        )).toEqual({
            searchFilterInfo: {type: "CHANGE_SEARCH_FILTERS", title : "search by", buttonList: [{id: "b1", text: "title", field: "title", checked: true}, {id: "b2", text: "genre", field: "genres", checked: false}]},
            navigationFilterInfo: {type: "CHANGE_NAVIGATION_FILTERS", title: "sort by", buttonList: [{id: "f1", text: "Release date", field: "release_date", checked: true}, {id: "f2", text: "rating", field: "vote_average", checked: false}]},
            query: "test search query"
        })
    })

    it('should handle CHANGE_SEARCH_FILTERS', () => {
        expect(filterReducer(
            filterState,
            {
                type: types.CHANGE_SEARCH_FILTERS,
                filters: [{id: "b1", text: "title", field: "title", checked: false}, {id: "b2", text: "genre", field: "genres", checked: false}]
            }
        )).toEqual({
            searchFilterInfo: {type: "CHANGE_SEARCH_FILTERS", title : "search by", buttonList: [{id: "b1", text: "title", field: "title", checked: false}, {id: "b2", text: "genre", field: "genres", checked: false}]},
            navigationFilterInfo: {type: "CHANGE_NAVIGATION_FILTERS", title: "sort by", buttonList: [{id: "f1", text: "Release date", field: "release_date", checked: true}, {id: "f2", text: "rating", field: "vote_average", checked: false}]},
            query: ""
        })
    })

    it('should handle CHANGE_NAVIGATION_FILTERS', () => {
        expect(filterReducer(
            filterState,
            {
                type: types.CHANGE_NAVIGATION_FILTERS,
                filters: [{id: "f1", text: "Release date", field: "release_date", checked: true}, {id: "f2", text: "rating", field: "vote_average", checked: true}]
            }
        )).toEqual({
            searchFilterInfo: {type: "CHANGE_SEARCH_FILTERS", title : "search by", buttonList: [{id: "b1", text: "title", field: "title", checked: true}, {id: "b2", text: "genre", field: "genres", checked: false}]},
            navigationFilterInfo: {type: "CHANGE_NAVIGATION_FILTERS", title: "sort by", buttonList: [{id: "f1", text: "Release date", field: "release_date", checked: true}, {id: "f2", text: "rating", field: "vote_average", checked: true}]},
            query: ""
        })
    })
})