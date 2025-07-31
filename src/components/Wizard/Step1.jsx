import React, { useState, useEffect } from 'react';

const Step1 = ({ data, updateData }) => {
    const key = Step1.meta.key;

    const [local, setLocal] = useState(() => {
        return data[key] || { state: 'initialized' };
    });

    useEffect(() => {
        setLocal(data[key] || { state: 'initialized' });
    }, [data, key]);

    const toggleState = () => {
        const nextState = {
            initialized: 'success',
            success: 'failure',
            failure: 'initialized'
        }[local.state] || 'initialized';

        const updated = { ...local, state: nextState };
        setLocal(updated);
        updateData(updated);
    };

    return (
        <div>
            <button onClick={toggleState}>Toggle State</button><br />
            Current: <strong>{local.state}</strong>
        </div>
    );
};

Step1.meta = {
    caption: 'Step 1',
    key: 'Step1',
    altCaption: 'Toggle state of Step 1'
};

export default Step1;
