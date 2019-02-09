import {
    FETCH_STORED_STATE,
    SAVE_BOOKS,
    ADD_DONE_BOOK,
    REMOVE_DONE_BOOK
} from '../actions/ActionType';

import { IS_DONE } from '../config';
import { IBook } from '../interfaces';

import { saveLS, loadLS } from '../helpers/syncLS';

const booksIsDone = (state: IBook[] = [], action: any) => {
    switch (action.type) {
        case ADD_DONE_BOOK:
            return [
                ...state,
                {
                    id: action.payload.id,
                    author: action.payload.author,
                    title: action.payload.title,
                    description: action.payload.description,
                    tags: action.payload.tags,
                    status: 'done'
                }
            ];
        case REMOVE_DONE_BOOK:
            return state.filter(({ id }) => {
                return id !== action.payload;
            });
        case SAVE_BOOKS:
            saveLS(IS_DONE, JSON.stringify(state));
            return state;
        case FETCH_STORED_STATE:
            const storedState = JSON.parse(loadLS(IS_DONE)!);
            return (state = storedState ? storedState : []);
        default:
            return state;
    }
};

export default booksIsDone;
