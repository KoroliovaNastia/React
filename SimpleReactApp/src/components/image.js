import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ image }) => (<img src={image} alt="" />);

export default Image;

Image.propTypes = {
  image: PropTypes.string.isRequired,
};
