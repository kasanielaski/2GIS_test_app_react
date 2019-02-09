import {
    SET_VISIBILITY_FILTER,
    SAVE_VISIBILITY_FILTER,
    FETCH_VISIBILITY_FILTER
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
        case FETCH_VISIBILITY_FILTER:
            const savedValue = JSON.stringify(loadLS(VISIBILITY_FILTER));
            return (state = savedValue ? savedValue : '');
        default:
            return state;
    }
};

export default visibilityFilter;
