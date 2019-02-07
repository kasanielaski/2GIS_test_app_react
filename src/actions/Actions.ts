import { action } from 'typesafe-actions';

import {
    FETCH_DATASET,
    ADD_TAG,
    CLEAR_TAGS,
    TOGGLE_STATUS,
    LOAD_STORE,
    SAVE_STORE
} from './ActionType';

export const fetchDataset = (payload: Object[]) => action(FETCH_DATASET, payload);

export const addTag = (payload: string) => action(ADD_TAG, payload);

export const clearTags = () => action(CLEAR_TAGS);

export const saveStore = () => action(SAVE_STORE);

export const loadStore = () => action(LOAD_STORE);

export const toggleStatus = (payload: {
    id: string;
    status: string
}) => action(TOGGLE_STATUS, payload);
