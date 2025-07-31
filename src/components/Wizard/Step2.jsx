import React, { useState, useEffect } from 'react';

const Step2 = ({ data, updateData }) => {
    const [local, setLocal] = useState(data.Step1 || {});

    useEffect(() => {
        setLocal(data.Step1 || {});
    }, [data]);

    const handleClick = () => {
        const newState = {
            ...local,
            state: local.state === 'clicked' ? 'unclicked' : 'clicked'
        };
        setLocal(newState);
        if (typeof updateData === 'function') {
            updateData(newState); // updates data.Step1
        }
    };

    return (
        <div>
            <button onClick={handleClick}>Toggle State</button><br />
        </div>
    );
};


export default Step2;
