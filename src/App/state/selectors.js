import { createSelector as select } from 'reselect';
import chunk from 'lodash/chunk';

const getState = state => state;

/**
 * Selects the ads array.
 */
export const selectAds = select(getState, s => chunk(s.ads, 3));
