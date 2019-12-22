import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledImage = styled.img`
  vertical-align: middle;
  margin: 20px 0;
  width: 260px;
  height: 380px;
  display: inline-block;
`;

const Image = ({ image }) => (<StyledImage src={image} alt="" />);

export default Image;

Image.propTypes = {
  image: PropTypes.string.isRequired,
};
