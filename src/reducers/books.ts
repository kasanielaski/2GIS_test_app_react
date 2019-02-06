import { TOGGLE_STATUS } from '../actions/ActionType';
import { IBook } from '../interfaces';

const books = (state: any, action: any) => {
    switch (action.type) {
        case TOGGLE_STATUS:
        // @ts-ignore
            return state.map(book =>
                book.id === action.payload.id
                    ? { ...book, status: action.payload.status }
                    : book
            )
        default:
            return state;
    }
};

export default books;
