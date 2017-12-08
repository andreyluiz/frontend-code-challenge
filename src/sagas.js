import { FETCH_ADS_REQUEST, fetchAdsSaga } from './App/state';

function* mainSaga() {
  yield takeEvery(FETCH_ADS_REQUEST, fetchAdsSaga);
}

export default mainSaga;
