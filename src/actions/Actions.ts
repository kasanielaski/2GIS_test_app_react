import { action } from 'typesafe-actions';

import {
    TOGGLE_STATUS,
    FETCH_DATASET,
    LOAD_STORE,
    SAVE_STORE
} from './ActionType';

export const fetchDataset = () => action(FETCH_DATASET);

export const saveStore = () => action(SAVE_STORE);

export const loadStore = () => action(LOAD_STORE);

export const toggleStatus = (payload: {
    id: string;
    status: string
}) => action(TOGGLE_STATUS, payload);
