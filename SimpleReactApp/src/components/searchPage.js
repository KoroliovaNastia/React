import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Footer from './footer';
import Main from './main';
import Logo from './logo';
import Header from './header';
import Search from './search';
import SearchNavigation from './searchNavigation';
import Box from './box';
import { updateFilters, changeQuery } from '../redux/actions';

import { updateMovieList } from '../redux/actions/get';


class SearchPage extends Component {
  constructor(props) {
    super(props);

    this.updateFilterByUrl = this.updateFilterByUrl.bind(this);
    this.updateFilterUrl = this.updateFilterUrl.bind(this);
  }

  componentDidMount() {
    const {
      navigationFilters, searchFilters, queryString, updateMovies, location, getQuery,
    } = this.props;
    const params = new URLSearchParams(location.search);
    const query = params.get('search');
    if (query !== null) {
      getQuery(query);
    }
    const searchBy = params.get('searchBy');
    const sortBy = params.get('sortBy');
    if (searchBy !== undefined && searchBy !== null && searchBy !== '') {
      this.updateFilterByUrl(searchFilters, searchBy);
    }

    if (sortBy !== undefined && sortBy !== null && sortBy !== '') {
      this.updateFilterByUrl(navigationFilters, sortBy);
    }

    updateMovies(navigationFilters, queryString, searchFilters);
  }

  componentDidUpdate(prevProps) {
    const {
      navigationFilters, queryString, searchFilters, updateMovies, location,
    } = this.props;
    if (navigationFilters !== prevProps.navigationFilters
            || searchFilters !== prevProps.searchFilters
            || queryString !== prevProps.queryString) {
      updateMovies(navigationFilters, queryString, searchFilters);
      const params = new URLSearchParams(location.search);
      const querySet = [{
        filter: 'sortBy',
        query: navigationFilters.buttonList.find((button) => button.checked === true).field,
      },
      { filter: 'searchBy', query: searchFilters.buttonList.find((button) => button.checked === true).field },
      { filter: 'search', query: queryString }];

      this.updateFilterUrl(params, querySet);
    }
  }

  updateFilterUrl(params, querySet) {
    const { history } = this.props;
    querySet.forEach((element) => {
      params.set(element.filter, element.query);
    });

    history.push(`?${params.toString()}`);
  }

  updateFilterByUrl(filterButtons, query) {
    const { updateFilterButtons } = this.props;
    const updatedButtons = filterButtons.buttonList.map((button) => ({ ...button, checked: (button.field === query) }));
    updateFilterButtons(filterButtons.type, updatedButtons);
  }

  render() {
    return (
      <>
        <Header>
          <Logo />
          <Search />
        </Header>
        <Box>
          <SearchNavigation />
        </Box>
        <Main />
        <Footer>
          <Box>
            <Logo />
          </Box>
        </Footer>
      </>
    );
  }
}

export function mapStateToProps(store) {
  return {
    searchFilters: store.filterState.searchFilterInfo,
    navigationFilters: store.filterState.navigationFilterInfo,
    queryString: store.filterState.query,
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    updateFilterButtons: (type, buttons) => dispatch(updateFilters(type, buttons)),
    updateMovies: (navigationFilters, queryString, searchFilters) => dispatch(
      updateMovieList(navigationFilters, queryString, searchFilters),
    ),
    getQuery: (currentQuery) => dispatch(changeQuery(currentQuery)),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchPage));

// SearchPage.propTypes = {
//   navigationFilters: PropTypes.shape({
//     title: PropTypes.string.isRequired,
//     buttonList: PropTypes.array.isRequired,
//     type: PropTypes.string.isRequired,
//   }).isRequired,
//   searchFilters: PropTypes.shape({
//     title: PropTypes.string.isRequired,
//     buttonList: PropTypes.array.isRequired,
//     type: PropTypes.string.isRequired,
//   }).isRequired,
//   queryString: PropTypes.string.isRequired,
//   location: PropTypes.objectOf(PropTypes.opject).isRequired,
//   history: PropTypes.objectOf(PropTypes.opject).isRequired,
//   updateFilterButtons: PropTypes.func.isRequired,
//   updateMovies: PropTypes.func.isRequired,
//   getQuery: PropTypes.func.isRequired,
// };
