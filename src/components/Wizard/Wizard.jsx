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
            const meta = child?.type?.meta;
            const isHidden = meta?.hidden === true;

            if (isHidden) {
                console.log(`Wizard: child ${child?.type?.name || 'Unknown'} is marked hidden. Skipping.`);
            }

            return !isHidden;
        })
        .map(child => {
            const meta = child?.type?.meta ?? {};
            const defaultKey = child?.type?.name || 'UnknownStep';

            const key = meta.key ?? defaultKey;
            const caption = meta.caption ?? defaultKey;
            const altCaption = meta.altCaption ?? '';

            const stepData = data[key] || {};
            const rawState = stepData.state;

            let status = 'initialized';
            if (rawState === 'success') status = 'success';
            else if (rawState && rawState !== 'initialized') status = 'failure';

            if (!child?.type?.meta) {
                console.warn(`Wizard: child ${defaultKey} has no static meta. Using defaults.`);
            } else {
                if (!meta.caption) console.warn(`Wizard: child ${defaultKey} missing meta.caption. Using default.`);
                if (!meta.key) console.warn(`Wizard: child ${defaultKey} missing meta.key. Using ${defaultKey}.`);
            }

            return {
                key,
                caption,
                altCaption,
                data, // this line is required for Stepper to access state
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
