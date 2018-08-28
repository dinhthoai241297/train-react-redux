import React, { Component, PropTypes } from 'react';
import CourseListRow from './CourseListRow';

class CourseList extends Component {
    render() {
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>
                            *
                        </th>
                        <th>
                            Title
                        </th>
                        <th>
                            Author
                        </th>
                        <th>
                            Category
                        </th>
                        <th>
                            Length
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.courses.map((course, index) => {return <CourseListRow key={index} course={course} />;})}
                </tbody>
            </table>
        );
    }
}

CourseList.propTypes = {
    courses: PropTypes.array.isRequired
};

export default CourseList;