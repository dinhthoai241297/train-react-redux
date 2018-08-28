import React, { Component, PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import LoadingDot from './LoadingDot';

class Header extends Component {
    render() {
        let {loading} = this.props;
        return (
            <nav>
                <IndexLink to="/" activeClassName="active" >Home</IndexLink>
                {" | "}
                <Link to="about" activeClassName="active" >About</Link>
                {" | "}
                <Link to="courses" activeClassName="active" >Courses</Link>
                {" | "}
                <Link to="course" activeClassName="active" >Manage Course</Link>
                {loading && <LoadingDot interval={100} dots={20} />}
            </nav>
        );
    }
}

Header.propTypes = {
    loading: PropTypes.bool.isRequired
};

export default Header;