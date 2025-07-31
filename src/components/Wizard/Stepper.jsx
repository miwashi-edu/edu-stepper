import React, { useState } from 'react';
import styles from './Wizard.module.css';
import StepTab from './StepTab.jsx';

const Stepper = ({ children }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div>
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                {React.Children.map(children, (child, index) => (
                    <StepTab
                        index={index}
                        isActive={index === activeIndex}
                        onClick={() => setActiveIndex(index)}
                    >
                        {child.type.name}
                    </StepTab>
                ))}
            </div>
            <div>
                {children[activeIndex]}
            </div>
        </div>
    );
};

export default Stepper;
