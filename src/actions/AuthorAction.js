import AuthorApi from './../api/MockAuthorApi';
import * as actionTypes from './../constants/AuthorActionTypes';
import { beginAjaxCall } from './AjaxStatusActions';

export function loadAuthorSuccess(authors) {
    return {
        type: actionTypes.LOAD_AUTHOR_SUCCESS,
        authors
    };
}

export function loadAuthor() {
    return dispatch => {
        dispatch(beginAjaxCall());
        return AuthorApi.getAllAuthors().then(authors => {
            dispatch(loadAuthorSuccess(authors));
        }).catch(error => {
            throw(error);
        });
    };
}