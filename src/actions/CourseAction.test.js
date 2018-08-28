import expect from 'expect';
import * as courseActionTypes from './../constants/CourseActionTypes';
import * as ajaxActionTypes from './../constants/AjaxActionTypes';
import * as courseAction from './../actions/CourseActions';

import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';

// Test a sync action
describe('Course Actions', () => {
    describe('createCourseSuccess', () => {
        it('shoulld create a CRETE_COUSE_SUCCESS action', () => {
            //arrange
            const course = {
                id: 'clean-code',
                title: 'Clean Code'
            };
            const expectedAction = {
                type: courseActionTypes.CREATE_COURSE_SUCCESS,
                course
            };

            //act
            const action = courseAction.createCourseSuccess(course);

            //assert
            expect(action).toEqual(expectedAction);
        });
    });
});

const middleWare = [thunk];
const mockStore = configureMockStore(middleWare);

describe('Async Actions', () => {
    afterEach(() => {
        nock.cleanAll();
    });

    it('should create BEGIN_AJAX_CALL and LOAD_COURSE_SUCCESS when loading courses', (done) => {
        const expectedAction = [
            { type: ajaxActionTypes.BEGIN_AJAX_CALL },
            { type: courseActionTypes.LOAD_COURSES_SUCCESS, body: { courses: [{ id: 'clean-code', title: 'Clean Code' }] } }
        ];

        const store = mockStore({courses: []}, expectedAction);
        store.dispatch(courseAction.loadCourse()).then(() => {
            const actions = store.getActions();
            expect(actions[0].type).toEqual(ajaxActionTypes.BEGIN_AJAX_CALL);
            expect(actions[1].type).toEqual(courseActionTypes.LOAD_COURSES_SUCCESS);
            done();
        });
    });
});