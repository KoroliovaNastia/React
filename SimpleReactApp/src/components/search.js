import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Filter from './filter';
import { changeQuery } from '../redux/actions';
import styled from 'styled-components'

export const StyledButton = styled.button`
  background-color: #f65261;
  border-radius: 3px;
  padding: 12px 70px;
  font-size: 17px;
  border: none;
`;

export const StyledInput = styled.input`
  background: #333131cc;
  border-radius: 3px;
  border: none;
  width: 50%;
  padding: 15px 70px;
  margin-right: 10px;
`;

const StyledDiv = styled.div`
  margin-left: 370px;
  margin-top: 140px;
`;

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
    const { searchButtonText, filterInfo: { title, buttonList, type }} = this.props;
    const { query } = this.state;
    return (
      <StyledDiv>
          <StyledInput type="search" placeholder="SEARCH" className="search-field" value={query} onChange={this.handleChange} />
          <StyledButton type="button" className="search-button" data-cy="search" onClick={this.onSearchClick}>
            {searchButtonText}
          </StyledButton>
          <Filter title={title} buttons={buttonList} type={type} />
      </StyledDiv>
    );
  }
}

function mapStateToProps(store) {
  return {
    filterInfo: store.filterState.searchFilterInfo,
    searchButtonText: store.appState.searchButtonText,
    query: store.filterState.query,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getQuery: (currentQuery) => dispatch(changeQuery(currentQuery)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);

// Search.propTypes = {
//   filterInfo: PropTypes.shape({
//     title: PropTypes.string.isRequired,
//     buttonList: PropTypes.array.isRequired,
//     type: PropTypes.string.isRequired,
//   }).isRequired,
//   getQuery: PropTypes.func.isRequired,
//   searchButtonText: PropTypes.string.isRequired,
// };
