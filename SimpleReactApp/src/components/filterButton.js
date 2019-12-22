import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledLabel = styled.label`
  padding: 10px 30px;
  cursor: pointer;
  border-radius: 6px;
  margin: 0px;
  background-color: ${props => props.data.checked ? '#f65261' : ''};
  display: initial;
`;

const StyledInput = styled.input`
  visibility: hidden;
  margin-right: -13px !important;
  margin-left: 0px;
`;

class FilterButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { data: { text, checked }} = this.props;
    return (
      <>
        { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
        <StyledInput type="checkbox" data-cy={text}/>
        <StyledLabel {...this.props}>{text}</StyledLabel>
      </>
    );
  }
}

export default FilterButton;

// FilterButton.propTypes = {
//   data: PropTypes.shape({
//     text: PropTypes.string.isRequired,
//     checked: PropTypes.bool.isRequired,
//   }).isRequired,
//   toggleChange: PropTypes.func.isRequired,
// };
