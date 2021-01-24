import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from 'src/reducers';
import { createWrapper } from 'next-redux-wrapper';

const configureStore: any = () => {
    const store = createStore(reducers, composeWithDevTools(applyMiddleware()));
    return store;
};

const wrapper = createWrapper(configureStore, {
    debug: process.env.NODE_ENV === 'development',
});

export default wrapper;
