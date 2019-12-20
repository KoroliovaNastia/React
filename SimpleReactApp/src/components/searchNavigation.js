import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Filter from './filter';

class SearchNavigation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { filterInfo: { title, buttonList, type } } = this.props;
    return (
      <Filter title={title} buttons={buttonList} type={type} />
    );
  }
}

function mapStateToProps(store) {
  return { filterInfo: store.filterState.navigationFilterInfo };
}

export default connect(mapStateToProps)(SearchNavigation);

SearchNavigation.propTypes = {
  filterInfo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    buttonList: PropTypes.array.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,
};
