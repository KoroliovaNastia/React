import React from 'react';
import {mount, configure} from 'enzyme';
import ErrorBoundary from '../src/components/errorBoundary';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
const NewComponent = () => null;

describe('ErrorBoundary component', () => {
    it('shoul display error message if wrapper component throws exception', () => {
        const wrapper = mount(
            <ErrorBoundary>
                <NewComponent/>
            </ErrorBoundary>
        )

        const error = new Error('test error');

        wrapper.find(NewComponent).simulateError(error);
        expect(wrapper).toHaveProperty('error', true);
    })
})
