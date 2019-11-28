import React from 'react';
import { shallow, configure, mount, render } from 'enzyme';
import FilterButton from '../src/components/filterButton'
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('FilterButton component', () =>{
    const data = {text: "test", checked: false}
    it('should be call toggleChange', () => {
        const toggleChange = jest.fn();
        const component = mount(<FilterButton data={data} toggleChange={toggleChange}/>);
        const checkbox = () => component.find('input');
       // expect(checkbox()).toHaveProperty("checked", false);
       // checkbox().should.not.be.checked();
        checkbox().simulate('change', {target: {checked: true}});
        expect(toggleChange).toHaveBeenCalled();
        //expect(checkbox()).toHaveProperty("checked", true);
    })
})