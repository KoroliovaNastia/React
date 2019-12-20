import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Logo = ({ appLogo }) => (
  <div className="logo">
    <p>
      {appLogo}
    </p>
  </div>
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
