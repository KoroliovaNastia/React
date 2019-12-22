import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledLogo = styled.div`
  display:inline-block;
    p{
      color: #f65261;
      padding: 16px;
      font-size: 20px;
    }
`;

const Logo = ({ appLogo }) => (
  <StyledLogo className="logo">
    <p>
      {appLogo}
    </p>
  </StyledLogo>
);

function mapStateToProps(store) {
  return {
    appLogo: store.appState.logo,
  };
}

export default connect(mapStateToProps)(Logo);

Logo.propTypes = {
  appLogo: PropTypes.string.isRequired,
};
