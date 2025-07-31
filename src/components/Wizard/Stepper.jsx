import React, { useState } from 'react';
import styles from './Wizard.module.css';
import StepTab from './StepTab.jsx';

const Stepper = ({ steps }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    if (!steps || steps.length === 0) {
        return <div>No valid steps found.</div>;
    }

    const currentStep = steps[activeIndex] || steps[0];

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
