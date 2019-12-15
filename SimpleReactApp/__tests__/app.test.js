import React from 'react';
import { shallow, configure } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import Root from '../src/components/root';
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

describe('Root component', () => {
        const wrapper = shallow(<Root></Root>)
        //const instance = wrapper.instance();
        expect(shallowToJson(wrapper)).toMatchSnapshot();

    //  it('should set isShowing for movies correctly', () => {
    //      const movie = instance.state.movieList[2];
    //      const result = instance.setIsShowing(movie, "false");
    //      expect(result.isShowing).toEqual("false");
    //  })
})