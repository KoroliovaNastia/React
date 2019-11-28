import React from 'react';
import { shallow, configure, mount, render } from 'enzyme';
import Movie from '../src/components/movie'
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import { isTSAnyKeyword, exportAllDeclaration } from '@babel/types';

configure({ adapter: new Adapter() });

describe('Movie component', () => {
    it('should be render correctly', () => {
        const movie = {image: "", title: "title", genre: "Horror", release_date: 2019, rating: 5.0}
        const component = shallow(<Movie movie={movie} />)
        expect(component).toMatchSnapshot();
    })
})
