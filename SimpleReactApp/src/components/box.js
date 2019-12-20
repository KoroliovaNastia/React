import React from 'react';
import PropTypes from 'prop-types';

function Box({ children }) {
  return (
    <div>
      {children}
    </div>
  );
}

export default Box;

Box.propTypes = {
  children: PropTypes.objectOf(Array).isRequired,
};
