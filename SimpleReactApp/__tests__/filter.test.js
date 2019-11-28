import React from 'react';
import { shallow, configure, mount, render } from 'enzyme';
import jest from 'jest'
import FilterButton from '../src/components/filterButton'
import { exportAllDeclaration } from '@babel/types';

describe('FilterButton component', () =>{
    const data = {text: "test", checked: false}
    it('should be call toggleChange', () => {
        const toggleChange = jest.fn();
        const component = mount(<FilterButton data={data} toggleChange={toggleChange}/>);
        const checkbox = () => component.find('input');
        checkbox().should.not.be.checked();
        checkbox().simulate('change', {target: {checked: true}});
        expect(toggleChange).toHaveBeenCalled();
    })
})