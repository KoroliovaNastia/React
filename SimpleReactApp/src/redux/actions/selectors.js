/* eslint-disable */
import { createSelector } from 'reselect';

const getSearchFilterInfo = (filter) => {
    return filter;
}

export const makeGetFilterInfo = createSelector(
    [ getSearchFilterInfo ],
    (filter) => filter
)