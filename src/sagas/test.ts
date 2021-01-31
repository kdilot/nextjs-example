import { takeLatest, put, delay } from 'redux-saga/effects'
import { TEST, TEST_SUCCESS } from '@reducers/test'

function* test(action: any) {
    console.log('CALLED REDUX SAGA TEST')
    yield put({ type: TEST_SUCCESS, payload: { text: 'loading...' } })
    yield delay(1500)
    yield put({
        type: TEST_SUCCESS,
        payload: { text: 'REDUX SAGA', number: 1 },
    })
}

export function* watchTest() {
    yield takeLatest(TEST, test)
}
