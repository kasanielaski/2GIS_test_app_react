import { combineReducers } from 'redux';

import booksInProgress from './booksInProgress';
import booksIsDone from './booksIsDone';
import dataset from './dataset';
import tags from './tags';
import visibilityFilter from './visibilityFilter';

export default combineReducers({
    booksInProgress,
    booksIsDone,
    dataset,
    tags,
    visibilityFilter
});
