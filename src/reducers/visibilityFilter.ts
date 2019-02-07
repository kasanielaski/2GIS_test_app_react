import { SET_VISIBILITY_FILTER } from '../actions/ActionType';
import { Visibility } from '../interfaces';
import { VISIBILITY_FILTER } from '../config';

import { saveLS } from '../helpers/syncLS';

const visibilityFilter = (state: any = '', action: any) => {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return (
                state = action.payload,
                saveLS(VISIBILITY_FILTER, JSON.stringify(state))
            )
        default:
            return state;
    }
};

export default visibilityFilter;
