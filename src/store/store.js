
import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
// remember the authentications and all this actions they are not async its becuase of this we have to use thunk
import thunk from 'redux-thunk';

//imports
import {authReducer} from '../reducers-redux/authReducer'

const composeEnhancers = (typeof window !== 'undefined'&& window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    auth: authReducer
})

// export const store = createStore(
//     reducers,
//     typeof window === 'object' &&
//     typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ?
//     window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
//     );

    export const store = createStore(
        reducers,
        composeEnhancers(
            applyMiddleware(thunk)
            )
        );