
import {createStore, combineReducers} from 'redux';
import {authReducer} from '../reducers-redux/authReducer'

const reducers = combineReducers({
    auth: authReducer


})

export const store = createStore(
    reducers,
    typeof window === 'object' &&
    typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ?
    window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    );
