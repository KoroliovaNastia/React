import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Footer = ({ children }) => (<footer>{children}</footer>);

export default Footer;

Footer.propTypes = {
  children: PropTypes.objectOf(Array).isRequired,
};
