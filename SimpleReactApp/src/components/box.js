/* @flow */
import * as React from 'react';
import styled from 'styled-components';

const StyledBox = styled.div`
  background-color: #555555;
  height: 65px;
  text-align: center;
`;

type Props = {
  children: React.Node,
};

function Box(props: Props) {
  const { children } = props;
  return (
    <StyledBox>
      {children}
    </StyledBox>
  );
}

export default Box;
