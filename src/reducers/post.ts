import { createAction, ActionType, createReducer } from 'typesafe-actions'
import produce from 'immer'

//  Actions Type
export const POST = 'post/POST'
export const POST_LOADING = 'post/POST_LOADING'
export const POST_FAIL = 'post/POST_FAIL'
export const POST_SUCCESS = 'post/POST_SUCCESS'

//  Actions
export const post = createAction(POST)()
export const postLoading = createAction(POST_LOADING)()
export const postFail = createAction(POST_FAIL)()
export const postSuccess = createAction(POST_SUCCESS)()

const actions = {
    post,
    postLoading,
    postFail,
    postSuccess,
}

type Actions = ActionType<typeof actions>

interface State {
    loading: boolean
    error: string
    data: any[]
}

// Default State
const initialState: State = {
    loading: false,
    error: '',
    data: [],
}

const Reducer = createReducer<State, Actions>(initialState, {
    [POST_LOADING]: (state, action: any) =>
        produce(state, (draft) => {
            const { error, data } = initialState
            draft.loading = true
            draft.error = error
            draft.data = data
        }),
    [POST_FAIL]: (state, action: any) =>
        produce(state, (draft) => {
            const { error, data } = action.payload
            draft.loading = false
            draft.error = error
        }),
    [POST_SUCCESS]: (state, action: any) =>
        produce(state, (draft) => {
            const { text, data } = action.payload
            draft.loading = false
            draft.data = data
        }),
})

export default Reducer
