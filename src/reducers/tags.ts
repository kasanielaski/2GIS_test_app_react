import { ADD_TAG, CLEAR_TAGS } from '../actions/ActionType';

const tags = (state: string[] = [], action: any) => {
    switch (action.type) {
        case ADD_TAG:
            return state = [
                ...state,
                action.payload
            ]
        case CLEAR_TAGS:
            return [];
        default:
            return state;
    }
};

export default tags;
