import { FETCH_DATASET } from '../actions/ActionType';
import { IBook } from '../interfaces';

const dataset = (state: IBook[] = [], action: any) => {
    switch (action.type) {
        case FETCH_DATASET:
        // @ts-ignore
            return state = [
                ...action.payload
            ]
        default:
            return state;
    }
};

export default dataset;
