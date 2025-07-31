import React, { useState } from 'react';
import styles from './Wizard.module.css';
import StepTab from './StepTab.jsx';

const Stepper = ({ steps }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    if (!steps || steps.length === 0) {
        return <div>No valid steps found.</div>;
    }

    const getStatus = (step) => {
        const state = step.data?.[step.key]?.state;

        if (!state || state === 'initialized') return 'initialized';
        if (state === 'success') return 'success';
        return 'failure'; // any non-success state is failure
    };


    const currentStep = steps[activeIndex];

    return (
        <div>
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                {steps.map((step, index) => (
                    <StepTab
                        key={step.key}
                        index={index}
                        isActive={index === activeIndex}
                        onClick={() => setActiveIndex(index)}
                        altCaption={step.altCaption}
                        status={getStatus(step)}
                    >
                        {step.caption}
                    </StepTab>
                ))}
            </div>
            <div>{currentStep.element}</div>
        </div>
    );
};

export default Stepper;
