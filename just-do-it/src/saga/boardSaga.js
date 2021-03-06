// Import libraries
import { put, call, takeLatest } from 'redux-saga/effects';

// Import const of the actions
import {
    START_GET_BOARDS,
    SUCCESS_GET_BOARDS,
    ERROR_GET_BOARDS,
    START_GET_MEMBERS_BY_BOARD_ID,
    SUCCESS_GET_MEMBERS_BY_BOARD_ID,
    ERROR_GET_MEMBERS_BY_BOARD_ID,
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
        const result = yield call(apiCall, `${baseURL}/members/me/boards?key=${apiKey}&token=${apiToken}`, 'GET');
        yield put({ type: SUCCESS_GET_BOARDS, result });
    } catch(error) {
        yield put({ type: ERROR_GET_BOARDS, error });
    }
}

// Do api request with Saga
export function * getMembersByBoardIdRequest({ payload }) {
    const { boardId } = payload;

    // Do request
    try {
        const result = yield call(apiCall, `${baseURL}/boards/${boardId}/members?key=${apiKey}&token=${apiToken}`, 'GET');
        yield put({ type: SUCCESS_GET_MEMBERS_BY_BOARD_ID, result });
    } catch(error) {
        yield put({ type: ERROR_GET_MEMBERS_BY_BOARD_ID, error });
    }
}

// Create watchers
export default function * userSaga() {
    yield takeLatest(START_GET_BOARDS, getBoardsRequest);
    yield takeLatest(START_GET_MEMBERS_BY_BOARD_ID, getMembersByBoardIdRequest);
}