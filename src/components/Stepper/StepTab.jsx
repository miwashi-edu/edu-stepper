import React from 'react';
import styles from './Stepper.module.css';

const StepTab = ({ label, isActive, state = 'init', onClick }) => {
    return (
        <div
            className={`${styles.step} ${isActive ? styles.active : ''} ${styles[state]}`}
            onClick={onClick}
        >
            {label}
        </div>
    );
};

export default StepTab;
