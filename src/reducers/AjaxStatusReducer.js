import * as actionTypes from './../constants/AjaxActionTypes';
import initState from './initialState';

function actionTypeEndsInSuccess(type) {
    return type.indexOf('_SUCCESS') > -1;
}

export default function ajaxStatusReducer(state = initState.numAjaxCallsInProgess, action) {
    if (action.type === actionTypes.BEGIN_AJAX_CALL) {
        return state + 1;
    } else if (action.type === actionTypes.AJAX_CALL_ERROR || actionTypeEndsInSuccess(action.type)) {
        return -1;
    }
    return state;
}