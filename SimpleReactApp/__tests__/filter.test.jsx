import React from 'react';
import { shallow, configure, mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import FilterButton from '../src/components/filterButton';
import Filter from '../src/components/filter';

configure({ adapter: new Adapter() });

const mockStore = configureStore();
const initialStore = {
  filterState: {
    searchFilterInfo: {
      type: 'CHANGE_SEARCH_FILTERS',
      title: 'search by',
      buttonList: [{
        id: 'b1', text: 'title', field: 'title', checked: true,
      }, {
        id: 'b2', text: 'genre', field: 'genres', checked: false,
      }],
    },
    navigationFilterInfo: {
      type: 'CHANGE_NAVIGATION_FILTERS',
      title: 'sort by',
      buttonList: [{
        id: 'f1', text: 'Release date', field: 'release_date', checked: true,
      }, {
        id: 'f2', text: 'rating', field: 'vote_average', checked: false,
      }],
    },
    query: '',
  },
};

const store = mockStore(initialStore);

describe('Filter component', () => {
  const { title, buttonList, type } = initialStore.filterState.searchFilterInfo;
  it('should render correctly', () => {
    const component = shallow(<Filter store={store} title={title} buttons={buttonList} type={type} />);
    expect(shallowToJson(component)).toMatchSnapshot();
  });
});

describe('FilterButton component', () => {
  const data = { text: 'test', checked: false };
  it('should be call toggleChange', () => {
    const toggleChange = jest.fn();
    const component = mount(<FilterButton data={data} toggleChange={toggleChange} />);
    const checkbox = () => component.find('input');
    checkbox().simulate('change', { target: { checked: true } });
    expect(toggleChange).toHaveBeenCalled();
  });
});
