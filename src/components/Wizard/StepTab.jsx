import React from 'react';
import styles from './Wizard.module.css';

const StepTab = ({ isActive, onClick, children }) => {
    return (
        <button
            onClick={onClick}
            className={`${styles.stepTab} ${isActive ? styles.stepTabActive : ''}`}
        >
            {children}
        </button>
    );
};

export default StepTab;
