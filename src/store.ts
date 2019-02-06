import { createStore } from 'redux';
import rootReducer from './reducers';

const initialState = {};

export const store = createStore(rootReducer, initialState);
