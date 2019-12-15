import React from 'react';
import { configure, mount, shallow } from 'enzyme';
import DescriptionPage, {mapDispatchToProps} from '../src/components/descriptionPage';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import configureMockStore from 'redux-mock-store';
import { findNodeModule } from 'jest-resolve';
import { JestEnvironment } from '@jest/environment';
import JestMock from 'jest-mock';
import {Provider} from "react-redux";
import thunk from 'redux-thunk'
import {BrowserRouter as Router} from 'react-router-dom';


configure({ adapter: new Adapter() });
const mockStore = configureMockStore();
let wrapper, store, match;
beforeEach(() => {
    const initialState = {
        movieState: {
            movieList: [{id: '1', image: '../src/images/movie-default.jpg', title:'Not yet...', genres:['Adventure'], release_date: '2022', vote_average: 5, runtime: 154, description:""}, 
            {id: '2', image: '../src/images/movie-default.jpg', title:'Soon...', genres:['Horror'], release_date: '2020', vote_average: 4, runtime: 154, description:""}],
            movieId: 1,
            movie: {id: '1', image: '../src/images/movie-default.jpg', title:'Not yet...', genres:['Adventure'], release_date: '2022', vote_average: 5, runtime: 154, description:""}
        },
        appState: {
            searchButtonText : "Search",
            logo: 'netflixroulete'
        }
    };
    store = mockStore(initialState);
    store.dispatch = jest.fn();

    match = { params: { id: 1 } }
    // wrapper = shallow(
    //     <DescriptionPage store={store} match={match}/>
    // ).dive();
});

describe('DescriptionPage component', () => {

    it('should render correctly', () => {
        wrapper = mount(<Provider store={store}><Router><DescriptionPage match={match}/></Router></Provider>)
        expect(shallowToJson(wrapper)).toMatchSnapshot();
    })

    it('should get movie and movieList correctly', () => {
        wrapper = shallow(
            <DescriptionPage store={store} match={match}/>
        ).dive();

        expect(wrapper.props().movie).toEqual({id: '1', image: '../src/images/movie-default.jpg', title:'Not yet...', genres:['Adventure'], release_date: '2022', vote_average: 5, runtime: 154, description:""})
        expect(wrapper.props().movieList).toEqual([{id: '1', image: '../src/images/movie-default.jpg', title:'Not yet...', genres:['Adventure'], release_date: '2022', vote_average: 5, runtime: 154, description:""}, 
        {id: '2', image: '../src/images/movie-default.jpg', title:'Soon...', genres:['Horror'], release_date: '2020', vote_average: 4, runtime: 154, description:""}])
    })
})