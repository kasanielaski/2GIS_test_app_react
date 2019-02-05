import { createStore } from 'redux';
import todoApp from './reducers/Reducers';

const initialState = {};

export const store = createStore(todoApp, initialState);
