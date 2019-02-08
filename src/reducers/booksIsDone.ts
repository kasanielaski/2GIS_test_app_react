import { ADD_TAG, CLEAR_TAGS } from '../actions/ActionType';
import { IS_DONE } from '../config';

import { saveLS } from '../helpers/syncLS';

const booksIsDone = (state: any = [], action: any) => {
    switch (action.type) {
        case ADD_TAG:
            return (
                state = [
                    ...state,
                    action.payload
                ],
                saveLS(IS_DONE, JSON.stringify(state))
            )
        case CLEAR_TAGS:
            return [];
        default:
            return state;
    }
};

export default booksIsDone;
