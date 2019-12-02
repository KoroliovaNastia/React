import React from 'react';
import { shallow, configure, mount, render } from 'enzyme';
import Movie from '../src/components/movie';
import MovieDescription from '../src/components/descriptionPage';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const movie = {id: "m1", image: "", title: "title", genre: "Horror", release_date: 2019, rating: 5.0, duration: "154", description: "lorem ipsum lorem ipsum loremipsum"}

describe('Movie component', () => {
    it('should be render correctly', () => {
        const component = mount(<Movie movie={movie} />)
        expect(shallowToJson(component)).toMatchSnapshot();
    })
})

describe('Movie description component', () => {
    it('should be render correctly', () => {
        const component = mount(<MovieDescription movie={movie} />)
        expect(shallowToJson(component)).toMatchSnapshot();
    })
})
