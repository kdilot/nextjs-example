import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import combinedReducer from 'src/reducers'
import { createWrapper, HYDRATE } from 'next-redux-wrapper'

const reducers = (state: any, action: any) => {
    if (action.type === HYDRATE) {
        const nextState = {
            ...state, // use previous state
            ...action.payload, // apply delta from hydration
        }
        return nextState
    } else {
        return combinedReducer(state, action)
    }
}

const configureStore: any = () => {
    const store = createStore(reducers, composeWithDevTools(applyMiddleware()))
    return store
}

const wrapper = createWrapper(configureStore, {
    debug: process.env.NODE_ENV === 'development',
})

export default wrapper
