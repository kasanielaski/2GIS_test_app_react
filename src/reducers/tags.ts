import {
    ADD_TAG,
    CLEAR_TAGS,
    SAVE_TAGS,
    FETCH_STORED_STATE
} from '../actions/ActionType';
import { TAGS } from '../config';

import { saveLS, loadLS } from '../helpers/syncLS';

// переделать стейт на тип Set без дубликатов
const tags = (state: any = [], action: any) => {
    switch (action.type) {
        case ADD_TAG:
            if (state.includes(action.payload)) {
                return state;
            } else {
                return (state = [...state, action.payload]);
            }
        case CLEAR_TAGS:
            return (state = []);
        case SAVE_TAGS:
            saveLS(TAGS, JSON.stringify(state));
            return state;
        case FETCH_STORED_STATE:
            const storedState = JSON.parse(loadLS(TAGS)!);
            return (state = storedState ? storedState : []);
        default:
            return state;
    }
};

export default tags;
