import React from 'react';
import { configure, mount } from 'enzyme';
import SearchPage from '../src/components/searchPage';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const logo = 'netflixroulete';
const searchButtonText = "Search";
const movieList = [{id: '1', image: '../src/images/movie-default.jpg', title:'Not yet...', genres:'Adventure', release_date: '2022', rating: '5.0', duration: '154', description:'lorem ipsum lorem ipsum', isShowing: true}, 
                  {id: '2', image: '../src/images/movie-default.jpg', title:'Soon...', genres:'Horror', release_date: '2020', rating: '4.1', duration: '153', description:'lorem ipsum lorem ipsum', isShowing: true}];
                  
const filters = {
                    searchFilterInfo: {type: "searchFilterInfo", title : "search by", buttonList: [{id: "b1", text: "title", checked: true}, {id: "b2", text: "genre", checked: false}]},
                    navigationFilterInfo: {type: "navigationFilterInfo", title: "sort by", buttonList: [{id: "f1", text: "Release date", checked: true}, {id: "f2", text: "rating", checked: false}]}
}

const updateFilterButtons = jest.fn()

const setIsShowing = jest.fn((movie, isShowing) => { return {...movie, isShowing: isShowing}; })
const component = mount(<SearchPage movieList={movieList} logo={logo} filters={filters} searchButtonText={searchButtonText} updateFilterButtons={updateFilterButtons} setIsShowing={setIsShowing}/>);
 
describe('SearchPage component', () => {
    it('should render correctly', () => {
        expect(shallowToJson(component)).toMatchSnapshot();
    })

    it('should filter movies by params and query correctly', () => {
        const result = component.instance().filterMoviesByParamAndQuery("title", "Not");
        expect(result.find(movie => !movie.isShowing).title).toEqual("Soon...");
    })

    it('should sort movies correctly', () => {
        const result = component.instance().sortMovies("duration");
        expect(result[0].duration).toEqual("153");
    })
})
