import React from 'react';
import { configure, mount, shallow } from 'enzyme';
import Movie from '../src/components/movie';
import MovieDescription from '../src/components/movieDescription';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';

configure({ adapter: new Adapter() });

const mockStore = configureStore();
const initialStore = {
    movieState: {
        movie: {id: '1', image: '../src/images/movie-default.jpg', title:'Not yet...', genres:['Adventure'], release_date: '2022', vote_average: 5, runtime: 154, description:""}
    }
}

const store = mockStore(initialStore);

describe('Movie component', () => {
    it('should be render correctly', () => {
        const component = shallow(<Movie.WrappedComponent movie={initialStore.movieState.movie} />)
        expect(shallowToJson(component)).toMatchSnapshot();
    })
})

describe('Movie description component', () => {
    it('should be render correctly', () => {
        const component = mount(<MovieDescription store={store} />)
        expect(shallowToJson(component)).toMatchSnapshot();
    })
})
