import React, { useState, useEffect } from 'react';

const Step4 = ({ data, updateData }) => {
    const key = Step4.meta.key;

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

Step4.meta = {
    caption: 'Step 4',
    key: 'Step4',
    altCaption: 'Toggle state of Step 4'
};

export default Step4;
