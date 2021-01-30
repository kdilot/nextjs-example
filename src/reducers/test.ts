import { createAction, ActionType, createReducer } from 'typesafe-actions';
import produce from 'immer';
import { HYDRATE } from 'next-redux-wrapper';

//  Actions Type
export const TEST = 'test/TEST';
export const TEST_COUNTER_PLUS = 'test/TEST_COUNTER_PLUS';
export const TEST_COUNTER_MINUS = 'test/TEST_COUNTER_MINUS';

//  Actions
export const test = createAction(TEST)<any>();
export const testPlusAction = createAction(TEST_COUNTER_PLUS)();
export const testMinusAction = createAction(TEST_COUNTER_MINUS)();

const actions = {
    test,
    testPlusAction,
    testMinusAction,
};

type Actions = ActionType<typeof actions>;

interface State {
    test: string;
    count: number;
}

// Default State
const initialState: State = {
    test: 'before redux action',
    count: 0,
};

const Reducer = createReducer<State, Actions>(initialState, {
    [TEST_COUNTER_PLUS]: (state, action) =>
        produce(state, (draft) => {
            draft.count = state.count + 1;
        }),
    [TEST_COUNTER_MINUS]: (state, action) =>
        produce(state, (draft) => {
            draft.count = state.count - 1;
        }),
});

export default Reducer;
