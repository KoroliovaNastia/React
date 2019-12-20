import fetchMock from 'fetch-mock';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { movieReducer, filterReducer } from '../src/redux/reducers/index';
import * as types from '../src/redux/constants/action-types';
import * as reduxActions from '../src/redux/actions/index';

configure({ adapter: new Adapter() });

describe('redux actions', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('should create an action to change query', () => {
    const query = 'new query';
    const expectedAction = {
      type: types.CHANGE_QUERY,
      query,
    };

    expect(reduxActions.changeQuery(query)).toEqual(expectedAction);
  });
});

describe('movie reducer', () => {
  const movieState = {
    movieList: null,
    movie: null,
  };

  it('should return initialMovieState', () => {
    expect(movieReducer(undefined, {})).toEqual(
      movieState,
    );
  });

  it('should handle SEARCH_RESULTS action', () => {
    expect(
      movieReducer(
        movieState,
        {
          type: types.SEARCH_RESULTS,
          movieList: [{ id: 'movie1', title: 'test movie 1' }],
        },
      ),
    ).toEqual({
      movieList: [{ id: 'movie1', title: 'test movie 1' }],
      movie: null,
    });
  });

  it('should handle SET_MOVIE action', () => {
    expect(movieReducer(
      movieState,
      {
        type: types.SET_MOVIE,
        movie: { id: 'movie2', title: 'test movie 2' },
      },
    )).toEqual({
      movieList: null,
      movie: { id: 'movie2', title: 'test movie 2' },
    });
  });
});

describe('filter reducer', () => {
  const filterState = {
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
  };

  it('should return initialFilterState', () => {
    expect(filterReducer(undefined, {})).toEqual(
      filterState,
    );
  });

  it('should handle CHANGE_QUERY action', () => {
    expect(filterReducer(
      filterState,
      {
        type: types.CHANGE_QUERY,
        query: 'test search query',
      },
    )).toEqual({
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
      query: 'test search query',
    });
  });

  it('should handle CHANGE_SEARCH_FILTERS', () => {
    expect(filterReducer(
      filterState,
      {
        type: types.CHANGE_SEARCH_FILTERS,
        filters: [{
          id: 'b1', text: 'title', field: 'title', checked: false,
        }, {
          id: 'b2', text: 'genre', field: 'genres', checked: false,
        }],
      },
    )).toEqual({
      searchFilterInfo: {
        type: 'CHANGE_SEARCH_FILTERS',
        title: 'search by',
        buttonList: [{
          id: 'b1', text: 'title', field: 'title', checked: false,
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
    });
  });

  it('should handle CHANGE_NAVIGATION_FILTERS', () => {
    expect(filterReducer(
      filterState,
      {
        type: types.CHANGE_NAVIGATION_FILTERS,
        filters: [{
          id: 'f1', text: 'Release date', field: 'release_date', checked: true,
        }, {
          id: 'f2', text: 'rating', field: 'vote_average', checked: true,
        }],
      },
    )).toEqual({
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
          id: 'f2', text: 'rating', field: 'vote_average', checked: true,
        }],
      },
      query: '',
    });
  });
});
