import { useEffect, useState } from 'react';

const HomeTypeSection = ({ data, updateData }) => {
    const [local, setLocal] = useState(() => ({
        type: data?.type ?? '',
        state: data?.state ?? 'init',
    }));

    useEffect(() => {
        if (!data) {
            updateData('homeType', local);
        }
    }, []);

    const handleChange = e => {
        const value = e.target.value;
        const updated = { ...local, type: value, state: 'done' };
        setLocal(updated);
        updateData('homeType', updated);
    };

    return (
        <div>
            <label>
                Type:{' '}
                <input value={local.type || ''} onChange={handleChange} />
            </label>
        </div>
    );
};

export default HomeTypeSection;
