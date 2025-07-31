import React, { useState, useEffect } from 'react';
import Viewer from "./Viewer.jsx";

const Step1 = ({ data, updateData }) => {
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

Step1.meta = {
    caption: 'Step 1',
    altCaption: 'Step 1',
    key: "step1",
    hidden: false
};


export default Step1;
