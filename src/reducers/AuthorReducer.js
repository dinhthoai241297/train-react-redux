import * as actionTypes from './../constants/AuthorActionTypes';
import initState from './initialState';

export default function authorReducer(state = initState.authors, action) {
    switch (action.type) {
        case actionTypes.LOAD_AUTHOR_SUCCESS: {
            return action.authors;
        }
        default: {
            return state;
        }
    }
}