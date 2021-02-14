import { all, fork } from 'redux-saga/effects'
import { watchPost } from './post'

export function* rootSaga() {
    yield all([fork(watchPost)])
}
