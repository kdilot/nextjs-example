import { takeLatest, put, delay, call } from 'redux-saga/effects'
import { POST, POST_LOADING, POST_SUCCESS } from '@reducers/post'
import { ApiDummyPost } from '@src/api'

function* post(action: any) {
    yield put({ type: POST_LOADING })
    const result = yield call(ApiDummyPost)
    yield put({
        type: POST_SUCCESS,
        payload: { data: result },
    })
}

export function* watchPost() {
    yield takeLatest(POST, post)
}
