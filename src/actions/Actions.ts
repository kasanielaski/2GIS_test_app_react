import { action } from 'typesafe-actions';

import {
    FETCH_DATASET,
    ADD_TAG,
    CLEAR_TAGS,
    SAVE_TAGS,
    SET_VISIBILITY_FILTER,
    SAVE_VISIBILITY_FILTER,
    ADD_TODO_BOOK,
    REMOVE_TODO_BOOK,
    ADD_PROGRESS_BOOK,
    REMOVE_PROGRESS_BOOK,
    ADD_DONE_BOOK,
    REMOVE_DONE_BOOK,
    SAVE_BOOKS,
    FETCH_STORED_STATE
} from './ActionType';
import { IBook } from '../interfaces';

export const fetchDataset = (payload: Object[]) =>
    action(FETCH_DATASET, payload);

export const fetchStoredState = () => action(FETCH_STORED_STATE);

export const addTag = (payload: string) => action(ADD_TAG, payload);
export const clearTags = () => action(CLEAR_TAGS);
export const saveTags = () => action(SAVE_TAGS);

export const setVisibilityFilter = (payload: string) =>
    action(SET_VISIBILITY_FILTER, payload);
export const saveVisibilityFilter = () => action(SAVE_VISIBILITY_FILTER);

export const addTodoBook = (payload: IBook) => action(ADD_TODO_BOOK, payload);
export const removeTodoBook = (payload: string) =>
    action(REMOVE_TODO_BOOK, payload);

export const addProgressBook = (payload: IBook) =>
    action(ADD_PROGRESS_BOOK, payload);
export const removeProgressBook = (payload: string) =>
    action(REMOVE_PROGRESS_BOOK, payload);

export const addDoneBook = (payload: IBook) => action(ADD_DONE_BOOK, payload);
export const removeDoneBook = (payload: string) =>
    action(REMOVE_DONE_BOOK, payload);

export const saveBooks = () => action(SAVE_BOOKS);
