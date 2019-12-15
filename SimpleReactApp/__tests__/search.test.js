import React from 'react';
import { configure, mount, shallow } from 'enzyme';
import SearchPage, {mapDispatchToProps, mapStateToProps} from '../src/components/searchPage';
import Search from '../src/components/search';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import {Provider} from "react-redux";
import {BrowserRouter as Router} from 'react-router-dom';
import SearchNavigation from '../src/components/searchNavigation';
//import {stub} from "sinon"

configure({ adapter: new Adapter() });
var sinon = require('sinon');

const mockStore = configureStore();
const initialStore = {
    movieState: {
        movieList: [{id: '1', image: '../src/images/movie-default.jpg', title:'Not yet...', genres:['Adventure'], release_date: '2022', vote_average: 5, runtime: 154, description:""}, 
        {id: '2', image: '../src/images/movie-default.jpg', title:'Soon...', genres:['Horror'], release_date: '2020', vote_average: 4, runtime: 154, description:""}],
        movieId: 1,
        movie: {id: '1', image: '../src/images/movie-default.jpg', title:'Not yet...', genres:['Adventure'], release_date: '2022', vote_average: 5, runtime: 154, description:""}
    },

    filterState: {
        searchFilterInfo: {type: "CHANGE_SEARCH_FILTERS", title : "search by", buttonList: [{id: "b1", text: "title", field: "title", checked: true}, {id: "b2", text: "genre", field: "genres", checked: false}]},
        navigationFilterInfo: {type: "CHANGE_NAVIGATION_FILTERS", title: "sort by", buttonList: [{id: "f1", text: "Release date", field: "release_date", checked: true}, {id: "f2", text: "rating", field: "vote_average", checked: false}]},
        query: ""
    },

    appState: {
        searchButtonText : "Search",
        logo: 'netflixroulete'
    }
}

const store = mockStore(initialStore);

const handleChange = jest.fn()
const updateMovies = jest.fn()
const getQuery = jest.fn()
const mockUrl = {
    search: ""
}
const updateFilterUrl = jest.fn()
const updateFilterByUrl = jest.fn();
const updateFilterButtons = jest.fn();

const props = {
    //queryString: "",
    updateMovies,
    updateFilterByUrl,
    updateFilterUrl,
    updateFilterButtons
}


//const setIsShowing = jest.fn((movie, isShowing) => { return {...movie, isShowing: isShowing}; })
 store.dispatch = jest.fn()
describe('SearchPage component', () => {
    
    let component
    
    it('should render correctly', () => {
        component = mount(<Provider store={store}><Router><SearchPage.WrappedComponent store={store} location={mockUrl} {...props}/></Router></Provider>);
        expect(shallowToJson(component)).toMatchSnapshot();
    })

    it('should handle mapStateToProps', () => {
        component = shallow(<SearchPage.WrappedComponent store={store} location={mockUrl} {...props}/>);
        expect(component.props().movies).toEqual(initialStore.movieState.movies)
    })

    it('should handle mapDispatchToProps properly', () => {
        mapDispatchToProps(store.dispatch).updateFilterButtons('CHANGE_SEARCH_FILTERS', [])
        //mapDispatchToProps(store.dispatch).updateMovies(initialStore.filterState.navigationFilterInfo, "", initialStore.filterState.searchFilterInfo)
        expect(store.dispatch.mock.calls[0][0]).toEqual({filters: [], type: 'CHANGE_SEARCH_FILTERS'})
    })

    // it('should filter movies by params and query correctly', () => {
    //     const result = component.instance().filterMoviesByParamAndQuery("title", "Not");
    //     expect(result.find(movie => !movie.isShowing).title).toEqual("Soon...");
    // })

    // it('should sort movies correctly', () => {
    //     const result = component.instance().sortMovies("duration");
    //     expect(result[0].duration).toEqual("153");
    // })
})

describe('Search component', () => {
    const props = {
        handleChange,
        getQuery
    }

    const getQueryStub = sinon.spy().withArgs({
        currentQuery: "stub test"
    })

    const component = mount(<Provider store={store}><Search getQuery={getQueryStub}  /*{...props}/* handleChange={handleChange}*/></Search></Provider>)
    it('should rendeer correctly', () => {
        expect(shallowToJson(component)).toMatchSnapshot();
    })

    it('should handle when changed value in search input', () => {
        const event = {target: {value: "party"}};
        const searchInput = component.find('.search-field');
        searchInput.simulate('change', event);
        expect(searchInput.instance().value).toEqual("party")
    })
    // const dispatch = jest.fn();
    // it('should handle onSearchClick and call getQuery', () => {
        
    // //let props = mapDispatchToProps(dispatch);
    //     const wrapper = shallow(<Search store={store} getQuery={getQueryStub}></Search>)
    //     const button = wrapper.find('.search-button');
    //     //button.simulate('click');
    //     console.log(wrapper.prop('getQuery'))
    //     expect(getQueryStub).toHaveBeenCalled();
    // })
})

describe('SearchNavigation component', () => {
    it('should render correctly', () => {
        const component = mount(<Provider store={store}><SearchNavigation ></SearchNavigation></Provider>)
        expect(shallowToJson(component)).toMatchSnapshot();
    })
})