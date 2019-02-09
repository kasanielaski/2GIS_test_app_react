import { IS_DONE } from '../config';
import { IBook } from '../interfaces';

import { saveLS, loadLS } from '../helpers/syncLS';

const booksIsDone = (state: IBook[] = [], action: any) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default booksIsDone;
