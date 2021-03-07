// Import libraries
import { all } from 'redux-saga/effects';

// Import sagas
import boardSaga from './boardSaga';

// Add watchers
export default function * rootSaga() {
    yield all([
        boardSaga(),
    ]);
}