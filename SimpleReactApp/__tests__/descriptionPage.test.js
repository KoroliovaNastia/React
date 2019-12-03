import React from 'react';
import { configure, mount } from 'enzyme';
import DescriptionPage from '../src/components/descriptionPage';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const logo = 'netflixroulete';
const movieList = [{id: '1', image: '../src/images/movie-default.jpg', title:'Not yet...', genre:'Adventure', release_date: '2022', rating: '5.0', duration: '154', description:'lorem ipsum lorem ipsum', isShowing: true}, 
                  {id: '2', image: '../src/images/movie-default.jpg', title:'Soon...', genre:'Horror', release_date: '2020', rating: '4.1', duration: '154', description:'lorem ipsum lorem ipsum', isShowing: true}];

const setIsShowing = jest.fn((movie, isShowing) => { return {...movie, isShowing: isShowing}; });

describe('DescriptionPage component', () => {
    it('should render correctly', () => {
        const component = mount(<DescriptionPage logo={logo} movieId={"1"} movieList={movieList} setIsShowing={setIsShowing}/>);
        expect(shallowToJson(component)).toMatchSnapshot();
    })
})