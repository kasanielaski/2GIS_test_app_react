import { FETCH_DATASET, REMOVE_BOOK } from '../actions/ActionType';
import { IBook } from '../interfaces';

const dataset = (state: IBook[] = [], action: any) => {
    switch (action.type) {
        case FETCH_DATASET:
            return (state = [...action.payload]);
        case REMOVE_BOOK:
            return state.filter(({ id }) => {
                return id !== action.payload;
            });
        default:
            return state;
    }
};

export default dataset;
