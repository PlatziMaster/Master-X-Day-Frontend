// Import libraries
import { put, call, takeLatest } from 'redux-saga/effects';

// Import const of the actions
import {
    START_GET_BOARDS,
    SUCCESS_GET_BOARDS,
    ERROR_GET_BOARDS,
} from '../redux/consts';

// Import fetch API function
import apiCall from './api';

// BaseURL
const baseURL = `${process.env.REACT_APP_API_URL}`;
const apiKey = `${process.env.REACT_APP_API_KEY}`;
const apiToken = `${process.env.REACT_APP_API_TOKEN}`;

// Do api request with Saga
export function * getBoardsRequest() {
    // Do request
    try {
        const result = yield call(apiCall, `${baseURL}/boards?key=${apiKey}&token=${apiToken}`, 'GET');
        yield put({ type: SUCCESS_GET_BOARDS, result });
    } catch(error) {
        yield put({ type: ERROR_GET_BOARDS, error });
    }
}

// Create watchers
export default function * userSaga() {
    yield takeLatest(START_GET_BOARDS, getBoardsRequest);
}