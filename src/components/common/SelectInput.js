import React, { Component, PropTypes } from 'react';

class SelectInput extends Component {
    render() {

        let { name, label, onChange, defaultOption, value, error, options } = this.props;

        return (
            <div className="form-group">
                <label htmlFor={name}>{label}</label>
                <div className="feild">
                    <select
                        name={name}
                        value={value}
                        onChange={onChange}
                        className="form-control"
                    >
                        <option value="">{defaultOption}</option>
                        {options.map(option => <option key={option.value} value={option.value}>{option.text}</option>)}
                    </select>
                    {error && <div className="alert alert-danger">{error}</div>}
                </div>
            </div>
        );
    }
}

SelectInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    defaultOption: PropTypes.string,
    value: PropTypes.string,
    error: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.object)
};

export default SelectInput;