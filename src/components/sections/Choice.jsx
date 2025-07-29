'use client';
import React from 'react';
import styles from './sections.module.css';


const Choice = ({
                    name,
                    value,
                    checked,
                    onChange,
                    label,
                    disabled = false,
                }) => {
    const id = `${name}-${value}`;

    const labelClass = `${styles.label} ${disabled ? styles.disabled : styles.enabled}`;
    const inputClass = `${styles.input} ${disabled ? styles.disabled : styles.enabled}`;

    return (
        <div className={styles.choice}>
            <input
                id={id}
                type="radio"
                name={name}
                value={value}
                checked={checked}
                onChange={onChange}
                disabled={disabled}
                className={inputClass}
            />
            {label && (
                <label
                    htmlFor={id}
                    className={labelClass}
                >
                    {label}
                </label>
            )}
        </div>
    );
};

export default Choice;
