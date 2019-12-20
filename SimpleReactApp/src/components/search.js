import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Filter from './filter';
import { changeQuery } from '../redux/actions';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
    };
    this.onSearchClick = this.onSearchClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  onSearchClick() {
    const { getQuery } = this.props;
    const { query } = this.state;
    getQuery(query);
  }

  handleChange(event) {
    this.setState({ query: event.target.value });
  }

  render() {
    const { searchButtonText, filterInfo: { title, buttonList, type } } = this.props;
    const { query } = this.state;
    return (
      <>
        <div>
          <input type="search" placeholder="SEARCH" className="search-field" value={query} onChange={this.handleChange} />
          <button type="button" className="search-button" data-cy="search" onClick={this.onSearchClick}>
            {searchButtonText}
          </button>
        </div>
        <div>
          <Filter title={title} buttons={buttonList} type={type} />
        </div>
      </>
    );
  }
}

function mapStateToProps(store) {
  return {
    filterInfo: store.filterState.searchFilterInfo,
    searchButtonText: store.appState.searchButtonText,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getQuery: (currentQuery) => dispatch(changeQuery(currentQuery)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);

Search.propTypes = {
  filterInfo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    buttonList: PropTypes.array.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,
  getQuery: PropTypes.func.isRequired,
  searchButtonText: PropTypes.string.isRequired,
};
