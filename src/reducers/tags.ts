import { ADD_TAG, CLEAR_TAGS, SAVE_TAGS, FETCH_TAGS } from '../actions/ActionType';
import { TAGS } from '../config';

import { saveLS, loadLS } from '../helpers/syncLS';

// переделать стейт на тип Set без дубликатов
const tags = (state: any = [], action: any) => {
    switch (action.type) {
        case ADD_TAG:
            return state = [
                ...state,
                action.payload
            ]
        case CLEAR_TAGS:
            return state = [];
        case SAVE_TAGS:
            saveLS(TAGS, JSON.stringify(state));
            return state;
        case FETCH_TAGS:
            return state = [
                ...JSON.parse(loadLS(TAGS)!)
            ]
        default:
            return state;
    }
};

export default tags;
