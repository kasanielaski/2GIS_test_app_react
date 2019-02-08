import { ADD_TAG, CLEAR_TAGS, SAVE_TAGS } from '../actions/ActionType';
import { TAGS } from '../config';

import { saveLS } from '../helpers/syncLS';

// переделать стейт на тип Set без дубликатов
const tags = (state: any = [], action: any) => {
    switch (action.type) {
        case ADD_TAG:
            return ([
                ...state,
                action.payload
            ])
        case CLEAR_TAGS:
            return [];
        case SAVE_TAGS:
            saveLS(TAGS, JSON.stringify(state));
            return state;
        default:
            return state;
    }
};

export default tags;
