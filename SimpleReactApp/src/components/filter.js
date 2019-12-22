import * as React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import FilterButton from './filterButton';
import { updateFilters } from '../redux/actions';

const InlineDiv = styled.div`
  display: inline-block;
  font-size: 17px;
`;

const StyledFilter = styled.div`
  display: inline-block;
  background-color: #120e0e75;
  border-radius: 6px;
  margin: 13px;
  padding: 10px 3px;
`;

const FilterContainer = styled.div`
  text-align: left;
  padding-left: 13px;
`;

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.toggleChange = this.toggleChange.bind(this);
  }

  toggleChange(checkedButton) {
    const { type, updateFilterButtons, buttons } = this.props;
    const newButtons = buttons.map((button) => ({ ...button, checked: (button.id === checkedButton.id) }));
    updateFilterButtons(type, newButtons);
  }

  render() {
    const { title, buttons } = this.props;

    return (
      <FilterContainer className="filter-container">
        <InlineDiv>
          <p>{title}</p>
        </InlineDiv>
        <StyledFilter>
          {buttons.map((button) => (
            <InlineDiv key={title + button.id} onClick={() => this.toggleChange(button)}>
              <FilterButton key={button.id} data={button} />
            </InlineDiv>
          ))}
        </StyledFilter>
      </FilterContainer>
    );
  }
}

function mapStateToProps(store) {
  return {
    searchFilters: store.filterState.searchFilterInfo,
    navigationFilters: store.filterState.navigationFilterInfo,
    query: store.filterState.query,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateFilterButtons: (type, buttons) => dispatch(updateFilters(type, buttons)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

Filter.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  updateFilterButtons: PropTypes.func.isRequired,
  buttons: PropTypes.arrayOf(Object).isRequired,
};
