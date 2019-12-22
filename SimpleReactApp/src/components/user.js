// @flow
import React from 'react';

type Props = {
  firstName: string,
  lastName: string,
}

function User(props: Props) {
  const { firstName, lastName } = props;
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

export default User;
