import React from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import StoryRouter from 'storybook-react-router';

const ProviderWrapper = ({ children, store }) => (
  <Provider store={store}>
    <StoryRouter>
      { children }
    </StoryRouter>
  </Provider>
);

export default ProviderWrapper;

ProviderWrapper.propTypes = {
  store: PropTypes.objectOf(PropTypes.object).isRequired,
  children: PropTypes.objectOf(PropTypes.object),
};

ProviderWrapper.defaultProps = {
  children: null,
};
