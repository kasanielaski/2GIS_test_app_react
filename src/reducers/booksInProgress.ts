import {
    FETCH_STORED_STATE,
    ADD_PROGRESS_BOOK,
    REMOVE_PROGRESS_BOOK,
    SAVE_BOOKS
} from '../actions/ActionType';
import { IN_PROGRESS } from '../config';

import { saveLS, loadLS } from '../helpers/syncLS';

import { IBook } from '../interfaces';

const booksInProgress = (state: IBook[] = [], action: any) => {
    switch (action.type) {
        case ADD_PROGRESS_BOOK:
            return [
                ...state,
                {
                    id: action.payload.id,
                    author: action.payload.author,
                    title: action.payload.title,
                    description: action.payload.description,
                    tags: action.payload.tags,
                    status: 'progress'
                }
            ];
        case REMOVE_PROGRESS_BOOK:
            return state.filter(({ id }) => {
                return id !== action.payload;
            });
        case SAVE_BOOKS:
            saveLS(IN_PROGRESS, JSON.stringify(state));
            return state;
        case FETCH_STORED_STATE:
            const storedState = JSON.parse(loadLS(IN_PROGRESS)!);
            return (state = storedState ? storedState : []);
        default:
            return state;
    }
};

export default booksInProgress;
