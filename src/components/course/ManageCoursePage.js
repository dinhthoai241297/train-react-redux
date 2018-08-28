import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import CourseForm from './CourseForm';
import * as acs from './../../actions/CourseActions';
import { bindActionCreators } from 'redux';
import toastr from 'toastr';
import { authorsFormattedForDropdown } from '../../selector/selectors';


export class ManageCoursePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            course: Object.assign({}, this.props.course),
            error: {},
            saving: false
        };

        this.updateCourseState = this.updateCourseState.bind(this);
        this.saveCourse = this.saveCourse.bind(this);
        this.courseFormIsValid = this.courseFormIsValid.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.course.id !== nextProps.course.id) {
            this.setState({
                course: Object.assign({}, nextProps.course)
            });
        }
    }

    updateCourseState(event) {
        let filed = event.target.name;
        let course = this.state.course;
        course[filed] = event.target.value;
        return this.setState({
            course
        });
    }

    courseFormIsValid() {
        let formIsValid = true, error = {};
        if (this.state.course.title.length < 5) {
            error.title = 'Title must be at least 5 characters.';
            formIsValid = false;
        }
        this.setState({
            error
        });
        return formIsValid;
    }

    saveCourse(event) {

        if (!this.courseFormIsValid()) {
            return;
        }
        event.preventDefault();
        this.setState({
            saving: true
        });
        this.props.actions.saveCourse(this.state.course).then(() => this.redirect()).catch(error => {
            toastr.error(error);
            this.setState({
                saving: false
            });
        });
    }

    redirect() {
        this.setState({
            saving: false
        });
        toastr.success('Course saved!');
        this.context.router.push('/courses');
    }

    render() {
        return (
            <div>
                <CourseForm
                    allAuthors={this.props.authors}
                    course={this.state.course}
                    error={this.state.error}
                    onChange={this.updateCourseState}
                    onSave={this.saveCourse}
                    saving={this.state.saving}
                />
            </div>
        );
    }
}

ManageCoursePage.propTypes = {
    course: PropTypes.object.isRequired,
    authors: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

ManageCoursePage.contextTypes = {
    router: PropTypes.object.isRequired
};

function getCourseById(courses, courseID) {
    let course = courses.filter(course => course.id === courseID);
    if (course) {
        return course[0];
    }
    return null;
}

const mapStateToProp = (state, prop) => {

    const courseID = prop.params.id;

    let course = {
        id: '',
        wathHref: '',
        title: '',
        authorId: '',
        length: '',
        category: ''
    };

    if (courseID && state.courses.length > 0) {
        course = getCourseById(state.courses, courseID);
    }

    return {
        course: course,
        authors: authorsFormattedForDropdown(state.authors)
    };
};

const mapDispatchToProp = (dispatch) => {
    return {
        actions: bindActionCreators(acs, dispatch)
    };
};

export default connect(mapStateToProp, mapDispatchToProp)(ManageCoursePage);