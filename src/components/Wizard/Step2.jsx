import React, { useState, useEffect } from 'react';

const Step2 = ({ data, updateData }) => {
    const key = Step2.meta.key;

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

Step2.meta = {
    caption: 'Step 2',
    key: 'Step2',
    altCaption: 'Toggle state of Step 2'
};

export default Step2;
