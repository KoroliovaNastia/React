import React from 'react'
import {connect} from 'react-redux';

const Logo = ({appLogo}) => (
    <div className="logo">
        <p /*className={logoStyle().logo*}*/>
        {appLogo}
        </p>
    </div>
);

function mapStateToProps(store) {
    return {
      appLogo: store.appState.logo
    };
  }

export default connect(mapStateToProps)(Logo)