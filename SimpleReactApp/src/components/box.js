import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const StyledBox = styled.div`
  background-color: #555555;
  height: 65px;
  text-align: center;
`;

function Box({ children }) {
  return (
    <StyledBox>
      {children}
    </StyledBox>
  );
}

export default Box;

Box.propTypes = {
  children: PropTypes.objectOf(Array).isRequired,
};
