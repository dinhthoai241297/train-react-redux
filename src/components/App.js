import React, { Component, PropTypes } from 'react';
import Header from './common/Header';
import { connect } from 'react-redux';

class App extends Component {
    render() {
        return (
            <div className="container-fluid">
                <Header loading={this.props.loading} />
                {this.props.children}
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired,
    loading: PropTypes.bool
};

function mapStateToProps(state, prop) {
    return {
        loading: state.ajaxCallsInProgess > -1
    };
}

export default connect(mapStateToProps)(App);