//@flow
import React from 'react';
import PropTypes from 'prop-types';

type Props = {
  firstName?: string,
  lastName?: string,
}

function User(props: Props) {
  return (
    <span>
        User:
      {' '}
      {props.firstName}
      {' '}
      {props.lastName}
    </span>
  );
}

export default User;
