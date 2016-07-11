import React, {PropTypes} from 'react';

const SelectInput = ({name, label, onChange, defaultOption, value, error, options}) => {
    return (
        <div>
            <select
                name={name}
                value={value}
                onChange={onChange}
                className="form-control"
            >
                <option value="">{defaultOption}</option>
                {options.map( (option) => {
                    return <option key={option.value} value={option.value}>{option.text}</option>;
                })
                }
            </select>
            {error && <div className="alert alert-dagner">{error}</div>}
        </div>
    );
};

SelectInput.propTypes = {
    name: PropTypes.string.isRequired
};

export default SelectInput;
