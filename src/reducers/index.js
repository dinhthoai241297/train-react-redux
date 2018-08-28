import {combineReducers} from 'redux';
import courses from './CourseRecuder';
import authors from './AuthorReducer';
import ajaxCallsInProgess from './AjaxStatusReducer';

const rootReducer = combineReducers({
    courses,
    authors,
    ajaxCallsInProgess
});

export default rootReducer;