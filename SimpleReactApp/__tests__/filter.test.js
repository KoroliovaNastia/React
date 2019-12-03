import React from 'react';
import { shallow, configure, mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import FilterButton from '../src/components/filterButton';
import Filter from '../src/components/filter';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Filter component', () => {
    const buttonList = [{id: "btn1", text: "first test button", checked: true}, {id: "btn2", text: "second test button", checked: false}];
    const title = "test filter";
    const type = "sort by";
    const updateFilterButtons = jest.fn();

    it('should render correctly', () => {
        const component = shallow(<Filter title={title} buttons={buttonList} type={type} updateFilterButtons={updateFilterButtons}/>);
        expect(shallowToJson(component)).toMatchSnapshot();
    })
})

describe('FilterButton component', () => {
    const data = {text: "test", checked: false}
    it('should be call toggleChange', () => {
        const toggleChange = jest.fn();
        const component = mount(<FilterButton data={data} toggleChange={toggleChange}/>);
        const checkbox = () => component.find('input');
        checkbox().simulate('change', {target: {checked: true}});
        expect(toggleChange).toHaveBeenCalled();
    })
})