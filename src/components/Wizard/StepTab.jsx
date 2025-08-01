import React from 'react';
import styles from './Wizard.module.css';
import { CheckCircle, Circle, XCircle } from 'lucide-react';

const StepTab = ({ label, isActive, state = 'initialized', onClick }) => {
    let icon = <Circle size={20} />;
    let stateClass = styles.init;

    if (state === 'success') {
        icon = <CheckCircle size={20} />;
        stateClass = styles.success;
    } else if (state !== 'initialized') {
        icon = <XCircle size={20} />;
        stateClass = styles.err;
    }

    return (
        <div className={`${styles.wrapper} ${isActive ? styles.active : ''}`} onClick={onClick}>
            <div className={`${styles.square} ${stateClass}`}>
                {icon}
            </div>
            <span className={styles.label}>{label}</span>
        </div>
    );
};

export default StepTab;
