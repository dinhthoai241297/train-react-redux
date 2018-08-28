import * as actionType from './../constants/CourseActionTypes';
import initState from './initialState';

export default function courseReducer(state = initState.courses, action) {
    switch (action.type) {
        case actionType.CREATE_COURSE: {
            return [...state, Object.assign({}, action.course)];
        }
        case actionType.LOAD_COURSES_SUCCESS: {
            return action.courses;
        }
        case actionType.CREATE_COURSE_SUCCESS: {
            return [...state, Object.assign({}, action.course)];
        }
        case actionType.UPDATE_COURSE_SUCCESS: {
            return [...state.filter(course => course.id != action.course.id), Object.assign({}, action.course)];
        }
        default: {
            return state;
        }
    }
}

