import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'
import headerImage from '../images/netflix-4.jpg';

const StyledHeader = styled.div`
  background: url(${headerImage}) no-repeat;
  background-color: #2323237f;
  height: 500px;
`;

const Header = ({ children }) => (
  <StyledHeader uk-img="true">
    {children}
  </StyledHeader>
);

export default Header;

Header.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};
