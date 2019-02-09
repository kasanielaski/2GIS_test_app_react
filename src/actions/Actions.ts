import { action } from 'typesafe-actions';

import {
    FETCH_DATASET,
    ADD_TAG,
    CLEAR_TAGS,
    SAVE_TAGS,
    FETCH_TAGS,
    SET_VISIBILITY_FILTER,
    SAVE_VISIBILITY_FILTER,
    FETCH_VISIBILITY_FILTER
} from './ActionType';

export const fetchDataset = (payload: Object[]) =>
    action(FETCH_DATASET, payload);

export const addTag = (payload: string) => action(ADD_TAG, payload);
export const clearTags = () => action(CLEAR_TAGS);
export const saveTags = () => action(SAVE_TAGS);
export const fetchTags = () => action(FETCH_TAGS);

export const setVisibilityFilter = (payload: string) =>
    action(SET_VISIBILITY_FILTER, payload);
export const saveVisibilityFilter = () => action(SAVE_VISIBILITY_FILTER);
export const fetchVisibilityFilter = () => action(FETCH_VISIBILITY_FILTER);
