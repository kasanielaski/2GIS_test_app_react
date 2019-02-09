import {
    SET_VISIBILITY_FILTER,
    SAVE_VISIBILITY_FILTER,
    FETCH_STORED_STATE
} from '../actions/ActionType';
import { VISIBILITY_FILTER } from '../config';

import { saveLS, loadLS } from '../helpers/syncLS';

const visibilityFilter = (state: any = '', action: any) => {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return (state = action.payload);
        case SAVE_VISIBILITY_FILTER:
            saveLS(VISIBILITY_FILTER, JSON.stringify(state));
            return state;
        case FETCH_STORED_STATE:
            const storedState = JSON.parse(loadLS(VISIBILITY_FILTER)!);
            return (state = storedState ? storedState : '');
        default:
            return state;
    }
};

export default visibilityFilter;
