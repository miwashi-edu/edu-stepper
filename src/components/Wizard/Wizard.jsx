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
            return !meta?.hidden;
        })
        .map(child => {
            const meta = child?.type?.meta ?? {};
            const defaultKey = child?.type?.name || 'UnknownStep';
            const key = meta.key ?? defaultKey;
            const caption = meta.caption ?? defaultKey;
            const altCaption = meta.altCaption ?? '';
            const role = meta.role ?? 'default';

            const stepData = data[key] || {};
            const rawState = stepData.state;

            // fix: determine proper state
            let state = 'initialized';
            if (role === 'viewer') {
                state = 'viewer';
            } else if (rawState === 'success') {
                state = 'success';
            } else if (rawState && rawState !== 'initialized') {
                state = 'failure';
            }

            return {
                key,
                caption,
                altCaption,
                state,
                view: role === 'viewer',
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

    return <Stepper steps={verifiedSteps} initialStep={initialStep} />;
};

export default Wizard;
