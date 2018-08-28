import React, { Component, PropTypes } from 'react';
import TextInput from './../common/TextInput';
import SelectInput from './../common/SelectInput';

class CourseForm extends Component {
    render() {
        let { course, onChange, error, allAuthors, onSave, saving } = this.props;
        return (
            <form>
                <h1>
                    Manage Course
                </h1>
                <TextInput
                    name="title"
                    label="title"
                    value={course.title}
                    onChange={onChange}
                    error={error.title}
                />

                <SelectInput
                    name="authorId"
                    label="Author"
                    value={course.authorId}
                    defaultOption="Select Author"
                    options={allAuthors}
                    onChange={onChange}
                    error={error.authorId}
                />

                <TextInput
                    name="category"
                    label="category"
                    value={course.category}
                    onChange={onChange}
                    error={error.category}
                />

                <TextInput
                    name="length"
                    label="length"
                    value={course.length}
                    onChange={onChange}
                    error={error.length}
                />

                <input
                    type="submit"
                    disabled={saving}
                    value={saving ? 'Saving...' : 'Save'}
                    className="btn btn-primary"
                    onClick={onSave}
                />
            </form>
        );
    }
}

CourseForm.propTypes = {
    course: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    error: PropTypes.object,
    allAuthors: PropTypes.array,
    onSave: PropTypes.func.isRequired,
    saving: PropTypes.bool
};

export default CourseForm;