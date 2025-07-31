import React, { useState } from 'react';
import Step from './Step.jsx';

const Wizard = ({ initialData = {}, initialStep = 0, children }) => {
    const [data, setData] = useState(initialData);

    const updateData = (key, value) => {
        setData(prev => ({ ...prev, [key]: value }));
    };

    const wrappedChildren = React.Children.map(children, (child) => (
        <Step>
            {React.cloneElement(child, {
                data: data[child.type.name],
                updateData: (val) => updateData(child.type.name, val)
            })}
        </Step>
    ));

    return (
        <>
            {wrappedChildren}
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </>
    );
};

export default Wizard;
