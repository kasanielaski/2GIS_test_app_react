import { combineReducers } from 'redux';

import dataset from './dataset';
import tags from './tags';

export default combineReducers({
    dataset,
    tags
});
