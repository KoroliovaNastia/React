import React from 'react';
import { shallow, configure } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import User from '../src/user';

configure({ adapter: new Adapter() });

describe('User', () => {
    it('should render correctly', () => {
        const output = shallow(
            <User firstName="Nastia" lastName="Koroliova" />
        );
        expect(shallowToJson(output)).toMatchSnapshot();
    });
});

// describe('Root', () => {
//     it('should render ')
// })