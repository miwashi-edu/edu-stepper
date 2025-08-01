import React, { useState } from 'react';
import styles from './Wizard.module.css';
import StepTab from './StepTab.jsx';

const Stepper = ({ steps, initialStep = 0 }) => {
    const [activeIndex, setActiveIndex] = useState(initialStep);

    if (!steps || steps.length === 0) {
        return <div>No valid steps found.</div>;
    }

    const currentStep = steps[activeIndex];

    return (
        <div>
            <div className={styles.stepper}>
                {steps.map((step, index) => (
                    <StepTab
                        key={step.key}
                        label={step.caption}
                        isActive={index === activeIndex}
                        state={step.state}
                        view={step.view} // NEW
                        onClick={() => setActiveIndex(index)}
                    />

                ))}
            </div>
            <div>{currentStep?.element}</div>
        </div>
    );
};

export default Stepper;
