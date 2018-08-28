import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from './../../actions/CourseActions';
import CourseList from './CourseList';
import { browserHistory } from 'react-router';

class CoursesPage extends Component {

    constructor(props) {
        super(props);

        /* Create course */
        // this.state = {
        //     course: {
        //         title: ''
        //     }
        // };

        // this.onTitleChange = this.onTitleChange.bind(this);
        // this.onClickSave = this.onClickSave.bind(this);
    }

    /* Create course */
    // onTitleChange(event) {
    //     let course = this.state.course;
    //     course.title = event.target.value;
    //     this.setState(course);
    // }

    // onClickSave() {
    //     this.props.createCourse(this.state.course);
    // }

    courseRow(course, index) {
        return (
            <div key={index}>{course.title}</div>
        );
    }

    redirectToAddCoursePage() {
        browserHistory.push('/course');
    }

    render() {
        return (
            <div>
                <h1>Course page</h1>
                <input 
                    type="submit"
                    value="Add Course"
                    className="btn btn-primary"
                    onClick={this.redirectToAddCoursePage}
                />
                <CourseList courses={this.props.courses} />
                {/* {this.props.courses.map(this.courseRow)} */}
                {/* Create course */}
                {/* <h2>Add Course</h2>
                <input
                    type="text"
                    onChange={this.onTitleChange}
                    value={this.state.course.title}
                />
                <input 
                    type="submit"
                    value="Save"
                    onClick={this.onClickSave}
                /> */}
            </div>
        );
    }
}

CoursesPage.propTypes = {
    courses : PropTypes.array.isRequired,
    createCourse: PropTypes.func.isRequired
};

const mapStateToProp = function(state, props) {
    return {
        courses: state.courses
    };
};

const mapDispatchToProp = function(dispatch) {
    return {
        createCourse : course => dispatch(actions.createCourse(course))
    };
};

export default connect(mapStateToProp, mapDispatchToProp)(CoursesPage);