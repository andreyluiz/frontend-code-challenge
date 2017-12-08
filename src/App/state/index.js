import { createDuck } from 'redux-duck';
import find from 'lodash/find';
import api from './api';

const duck = createDuck('ads');

const FETCH_ADS_SUCCESS = duck.defineType('FETCH_ADS_SUCCESS');

const fetchAdsSuccess = duck.createAction(FETCH_ADS_SUCCESS);

export const fetchAds = () =>
  (dispatch, getState) => new Promise(async (resolve, reject) => {
    try {
      const data = await api.fetchAds();
      dispatch(fetchAdsSuccess(data));
      resolve();
    } catch (e) {
      reject(e);
    }
  });

const initialState = {
  ads: [],
};

export const reducer = duck.createReducer({
  [FETCH_ADS_SUCCESS]: (state, { payload }) => ({
    ads: payload.slice(0, 10).map((ad) => {
      const titleImage = find(ad.advertisementAssets, { titlePicture: true });
      return {
        id: ad._id.$id, // eslint-disable-line no-underscore-dangle
        purpose: ad.purpose,
        title: ad.title,
        price: ad.advertisementPrice.baseRent,
        numberOfRooms: ad.realestateSummary.numberOfRooms,
        space: ad.realestateSummary.space,
        thumbnail: titleImage ? titleImage.advertisementThumbnails.inventory_m.url : null,
      };
    }),
  }),
}, initialState);
