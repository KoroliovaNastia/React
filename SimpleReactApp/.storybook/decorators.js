import React from 'react'
import ProviderWrapper from '../src/redux/providerWrapper';
import {configureStore} from '../src/redux/store'

const store = configureStore();

export const withProvider = (story) => (
    <ProviderWrapper store={store}>
      { story() }
    </ProviderWrapper>
)