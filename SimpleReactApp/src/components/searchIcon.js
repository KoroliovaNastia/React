import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const StyledLink = styled(Link)`
  color: #f65261;
  font-size: 25px;
  display: inline-block;
  position: relative;
  float: right;
  padding: 16px;
  text-align:right;
  &:hover {
    color: #f65261;
  }
`;

const SearchIcon =({to}) => 
    <StyledLink  to={to}>
        <i className="glyphicon glyphicon-search" />
    </StyledLink>

export default SearchIcon    