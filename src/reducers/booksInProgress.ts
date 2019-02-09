import {
    ADD_BOOK,
    SAVE_BOOKS,
    FETCH_STORED_STATE
} from '../actions/ActionType';
import { IN_PROGRESS } from '../config';

import { saveLS, loadLS } from '../helpers/syncLS';

import { IBook } from '../interfaces';

const booksInProgress = (state: IBook[] = [], action: any) => {
    switch (action.type) {
        case ADD_BOOK:
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
        case SAVE_BOOKS:
            saveLS(IN_PROGRESS, JSON.stringify(state));
            return state;
        case FETCH_STORED_STATE:
            return (state = [...JSON.parse(loadLS(IN_PROGRESS)!)]);
        default:
            return state;
    }
};

export default booksInProgress;
