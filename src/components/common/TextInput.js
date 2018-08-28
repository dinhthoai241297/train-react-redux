import React, { Component, PropTypes } from 'react';

class TextInput extends Component {
    render() {
        let { name, label, onChange, placeholder, value, error } = this.props;
        let wraperClass = 'form-group';
        if (error && error.length > 0) {
            wraperClass += ' has-error';
        }
        return (
            <div className={wraperClass}>
                <label htmlFor={name}>
                    {label}
                </label>
                <div className="field">
                    <input
                        type="text"
                        name={name}
                        className="form-control"
                        placeholder={placeholder}
                        value={value}
                        onChange={onChange}
                    />
                    {error && <div className="alert alert-danger">{error}</div>}
                </div>
            </div>
        );
    }
}

TextInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    error: PropTypes.string
};

export default TextInput;