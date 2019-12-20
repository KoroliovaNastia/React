import React from 'react';
import PropTypes from 'prop-types';

function User({ firstName, lastName }) {
  return (
    <span>
        User:
      {' '}
      {firstName}
      {' '}
      {lastName}
    </span>
  );
}

User.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
};

export default User;
