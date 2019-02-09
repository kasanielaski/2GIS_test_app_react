import { SAVE_BOOKS, FETCH_STORED_STATE } from '../actions/ActionType';

import { IS_DONE } from '../config';
import { IBook } from '../interfaces';

import { saveLS, loadLS } from '../helpers/syncLS';

const booksIsDone = (state: IBook[] = [], action: any) => {
    switch (action.type) {
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
