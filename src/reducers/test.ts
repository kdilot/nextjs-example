import { createAction, ActionType, createReducer } from 'typesafe-actions'
import produce from 'immer'

//  Actions Type
export const TEST = 'test/TEST'
export const TEST_COUNTER_PLUS = 'test/TEST_COUNTER_PLUS'
export const TEST_COUNTER_MINUS = 'test/TEST_COUNTER_MINUS'
export const TEST_SUCCESS = 'test/TEST_SUCCESS'

//  Actions
export const test = createAction(TEST)()
export const testPlusAction = createAction(TEST_COUNTER_PLUS)()
export const testMinusAction = createAction(TEST_COUNTER_MINUS)()
export const testSuccess = createAction(TEST_SUCCESS)()

const actions = {
    test,
    testPlusAction,
    testMinusAction,
    testSuccess,
}

type Actions = ActionType<typeof actions>

interface State {
    text: string
    sagaCount: number
    count: number
}

// Default State
const initialState: State = {
    text: 'before redux action',
    sagaCount: 0,
    count: 0,
}

const Reducer = createReducer<State, Actions>(initialState, {
    [TEST_COUNTER_PLUS]: (state, action) =>
        produce(state, (draft) => {
            draft.count = state.count + 1
        }),
    [TEST_COUNTER_MINUS]: (state, action) =>
        produce(state, (draft) => {
            draft.count = state.count - 1
        }),
    [TEST_SUCCESS]: (state, action: any) =>
        produce(state, (draft) => {
            const { text, number } = action.payload
            if (number) {
                draft.sagaCount = state.sagaCount + 1
            }
            draft.text = text
        }),
})

export default Reducer
