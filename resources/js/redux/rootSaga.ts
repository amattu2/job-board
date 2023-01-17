import { all } from 'redux-saga/effects';
import authenticateSaga from './Authenticate/apiSaga';

export default function* rootSaga() {
  yield all([authenticateSaga()]);
}
