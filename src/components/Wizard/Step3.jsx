import React, { useState, useEffect } from 'react';

const Step3 = ({ data, updateData }) => {
    const key = Step3.meta.key;

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

Step3.meta = {
    caption: 'Step 3',
    key: 'Step3',
    altCaption: 'Toggle state of Step 3'
};

export default Step3;
