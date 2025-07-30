import React, { useState } from 'react';
import styles from './Choices.module.css';

const Choice = ({ name, value, checked, onChange, label, data, typeable = false }) => {
    const errors = [];
    if (typeof name !== 'string') errors.push('name must be a string');
    if (typeof value !== 'string') errors.push('value must be a string');
    if (!typeable && data == null) errors.push('data must exist');
    if (typeof checked !== 'boolean') errors.push('checked must be a boolean');
    if (typeof onChange !== 'function') errors.push('onChange must be a function');
    if (typeof label !== 'string') errors.push('label must be a string');

    if (errors.length > 0) {
        return <span>Invalid props: {errors.join(', ')}</span>;
    }

    const [inputValue, setInputValue] = useState(data ?? '');

    const handleChange = () => {
        const payload = typeable ? inputValue : data;
        onChange(value, payload);
    };

    return (
        <label className={styles.choice}>
            <input
                type="radio"
                name={name}
                value={value}
                checked={checked}
                onChange={handleChange}
            />
            {label}
            {typeable && checked && (
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onBlur={handleChange}
                    style={{ marginLeft: '0.5em' }}
                />
            )}
        </label>
    );
};

export default Choice;


