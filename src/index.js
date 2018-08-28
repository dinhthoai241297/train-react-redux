/* eslint-disable import/default */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import * as actions from './actions/CourseActions';
import * as actionsAuthor from './actions/AuthorAction';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore.dev';
import '../node_modules/toastr/build/toastr.min.css';

const store = configureStore();
store.dispatch(actions.loadCourse());
store.dispatch(actionsAuthor.loadAuthor());

render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById('app')
);