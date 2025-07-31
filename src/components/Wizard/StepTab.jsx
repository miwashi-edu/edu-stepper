import React from 'react';
import styles from './Wizard.module.css';

const ICONS = {
    initialized: '⚪',
    success: '✅',
    failure: '❌',
};

const StepTab = ({ isActive, onClick, children, altCaption, status }) => {
    const icon = ICONS[status] || '❓';

    return (
        <button
            onClick={onClick}
            title={altCaption}
            className={`${styles.stepTab} ${isActive ? styles.active : ''}`}
        >
            <span style={{ marginRight: '0.5rem' }}>{icon}</span>
            {children}
        </button>
    );
};

export default StepTab;
