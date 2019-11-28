import React from 'react';
import { shallow, configure, mount, render } from 'enzyme';
import Movie from '../src/components/movie'
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import { isTSAnyKeyword, exportAllDeclaration } from '@babel/types';

configure({ adapter: new Adapter() });

describe('Movie component', () => {
    it('should be render correctly', () => {
        const releaseDate = 2019;
        const rating = 5.0;
        const component = shallow(<Movie title="title" genre="Horror" release_date={releaseDate} rating={rating}/>)
        expect(component).toMatchSnapshot();
    })
})
