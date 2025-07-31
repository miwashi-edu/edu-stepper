import React, { useState } from 'react';
import styles from './Wizard.module.css';
import Step from './Step.jsx';
import Stepper from './Stepper.jsx';

const Wizard = ({ initialData = {}, initialStep = 0, children }) => {
    const [data, setData] = useState(initialData);

    const updateData = (key, value) => {
        setData(prev => ({ ...prev, [key]: value }));
    };

    const verifiedSteps = React.Children.toArray(children)
        .filter(child => {
            const meta = child.type.meta;
            const hasCaption = meta && typeof meta.caption === 'string';
            const isVisible = !meta?.hidden;

            if (!hasCaption) {
                console.warn(`Wizard: child ${child.type.name || 'Unknown'} is missing meta.caption. Skipping.`);
            }

            if (!isVisible) {
                console.log(`Wizard: child ${child.type.name} is marked hidden. Skipping.`);
            }
            return hasCaption && isVisible;
        })
        .map(child => {
            const meta = child.type.meta;
            const key = meta?.node ?? child.type.name;
            return {
                key,
                caption: meta.caption,
                altCaption: meta.altCaption || '',
                element: (
                    <Step>
                        {React.cloneElement(child, {
                            data,
                            updateData: (val) => updateData(key, val)
                        })}
                    </Step>
                )
            };
        });

    if (verifiedSteps.length === 0) {
        return <div>Wizard has no valid steps to display.</div>;
    }

    return (
        <>
            <Stepper steps={verifiedSteps} />
        </>
    );
};

export default Wizard;
