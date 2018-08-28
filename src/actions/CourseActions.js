import * as actionTypes from '../constants/CourseActionTypes';
import courseAPI from './../api/MockCourseApi';
import { beginAjaxCall, ajaxCallError } from './AjaxStatusActions';

/* create course */
export function createCourse(course) {
    return {
        type: actionTypes.CREATE_COURSE,
        course
    };
}

export function loadCourseSuccess(courses) {
    return {
        type: actionTypes.LOAD_COURSES_SUCCESS,
        courses
    };
}

export function loadCourse() {
    return dispatch => {
        dispatch(beginAjaxCall());
        return courseAPI.getAllCourses().then(courses => {
            dispatch(loadCourseSuccess(courses));
        }).catch((err) => {
            dispatch(ajaxCallError());
            throw(err);
        });
    };
}

export function updateCourseSuccess(course) {
    return {
        type: actionTypes.UPDATE_COURSE_SUCCESS,
        course
    };
}

export function createCourseSuccess(course) {
    return {
        type: actionTypes.CREATE_COURSE_SUCCESS,
        course
    };
}

export function saveCourse(course) {
    return dispatch => {
        dispatch(beginAjaxCall());
        return courseAPI.saveCourse(course).then(course => {
            course.id ? dispatch(updateCourseSuccess(course)) : dispatch(createCourseSuccess(course));
        }).catch(err => {
            dispatch(ajaxCallError());
            throw(err);
        });
    };
}