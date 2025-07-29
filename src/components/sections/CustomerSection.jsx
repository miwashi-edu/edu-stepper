import { useEffect, useState } from 'react';

const CustomerSection = ({ data, updateData }) => {
    const [local, setLocal] = useState(() => ({
        name: data?.name ?? '',
        state: data?.state ?? 'init',
    }));

    useEffect(() => {
        if (!data) {
            updateData('customer', local);
        }
    }, []);

    const handleChange = e => {
        const value = e.target.value;
        const updated = { ...local, name: value, state: 'done' };
        setLocal(updated);
        updateData('customer', updated);
    };

    return (
        <div>
            <label>
                Name:{' '}
                <input value={local.name || ''} onChange={handleChange} />
            </label>
        </div>
    );
};

export default CustomerSection;
