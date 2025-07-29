import { useEffect, useState } from 'react';

const HomeStyleSection = ({ data, updateData }) => {
    const [local, setLocal] = useState(() => ({
        style: data?.style ?? '',
        state: data?.state ?? 'init',
    }));

    useEffect(() => {
        if (!data) {
            updateData('homeStyle', local);
        }
    }, []);

    const handleChange = e => {
        const value = e.target.value;
        const updated = { ...local, style: value, state: 'done' };
        setLocal(updated);
        updateData('homeStyle', updated);
    };

    return (
        <div>
            <label>
                Style:{' '}
                <input value={local.style || ''} onChange={handleChange} />
            </label>
        </div>
    );
};

export default HomeStyleSection;
