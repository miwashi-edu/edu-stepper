import React, { useState } from 'react';
import styles from './Wizard.module.css';
import Step from './Step.jsx';
import Stepper from './Stepper.jsx';

const Wizard = ({ initialData = {}, initialStep = 0, children }) => {
    const [data, setData] = useState(initialData);

    const updateData = (key, value) => {
        setData(prev => ({ ...prev, [key]: value }));
    };

    const wrappedChildren = React.Children.map(children, (child) => {
        const key = child.type.name;
        return (
            <Step>
                {React.cloneElement(child, {
                    data, // full data object
                    updateData: (val) => updateData(key, val)
                })}
            </Step>
        );
    });


    return (
        <>
            <Stepper>{wrappedChildren}</Stepper>
        </>
    );
};

export default Wizard;
