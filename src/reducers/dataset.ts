import {
    FETCH_DATASET,
    ADD_TODO_BOOK,
    REMOVE_TODO_BOOK
} from '../actions/ActionType';
import { IBook } from '../interfaces';

const dataset = (state: IBook[] = [], action: any) => {
    switch (action.type) {
        case FETCH_DATASET:
            return (state = [...action.payload]);
        case ADD_TODO_BOOK:
            return [
                ...state,
                {
                    id: action.payload.id,
                    author: action.payload.author,
                    title: action.payload.title,
                    description: action.payload.description,
                    tags: action.payload.tags
                }
            ];
        case REMOVE_TODO_BOOK:
            return state.filter(({ id }) => {
                return id !== action.payload;
            });
        default:
            return state;
    }
};

export default dataset;
