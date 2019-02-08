import { ADD_TAG, CLEAR_TAGS } from '../actions/ActionType';
import { TAGS } from '../config';

import { saveLS } from '../helpers/syncLS';

const tags = (state: any = [], action: any) => {
    switch (action.type) {
        case ADD_TAG:
            return (
                state = [
                    ...state,
                    action.payload
                ],
                saveLS(TAGS, JSON.stringify(state))
            )
        case CLEAR_TAGS:
            return [];
        default:
            return state;
    }
};

export default tags;