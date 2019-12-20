import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FilterButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { data, data: { text, checked }, toggleChange } = this.props;
    return (
      // eslint-disable-next-line jsx-a11y/label-has-associated-control
      <label>
        <input type="checkbox" data-cy={text} checked={checked === true} onChange={() => toggleChange(data)} />
        {text}
      </label>
    );
  }
}

export default FilterButton;

FilterButton.propTypes = {
  data: PropTypes.shape({
    text: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
  }).isRequired,
  toggleChange: PropTypes.func.isRequired,
};
