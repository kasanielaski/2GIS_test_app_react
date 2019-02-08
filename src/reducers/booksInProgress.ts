import { ADD_TAG, CLEAR_TAGS } from '../actions/ActionType';
import { IN_PROGRESS } from '../config';

import { saveLS } from '../helpers/syncLS';

const booksInProgress = (state: any = [], action: any) => {
    switch (action.type) {
        case ADD_TAG:
            return (
                state = [
                    ...state,
                    action.payload
                ],
                saveLS(IN_PROGRESS, JSON.stringify(state))
            )
        case CLEAR_TAGS:
            return [];
        default:
            return state;
    }
};

export default booksInProgress;
