import React, { useState, useEffect } from 'react';

const Step2 = ({ data, updateData }) => {
    const [local, setLocal] = useState(data);

    useEffect(() => {
        setLocal(data);
    }, [data]);

    const handleClick = () => {
        const newState = {
            ...local,
            state: local?.state === 'on' ? 'off' : 'on'
        };
        setLocal(newState);
        if (typeof updateData === 'function') {
            updateData(newState);
        }
    };

    return (
        <div>
            <button onClick={handleClick}>Toggle State</button><br />
            Step 2: <pre>{JSON.stringify(local, null, 2)}</pre>
        </div>
    );
};

export default Step2;
