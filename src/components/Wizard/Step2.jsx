import React, { useState, useEffect } from 'react';
import Step1 from "./Step1.jsx";

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

Step2.meta = {
    caption: 'Step 2',
    altCaption: 'Step 2',
    node: "step2",
    hidden: false
};

export default Step2;
