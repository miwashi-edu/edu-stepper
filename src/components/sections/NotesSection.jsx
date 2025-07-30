import { useEffect, useState } from 'react';

const NotesSection = ({ data, updateData }) => {
    const [local, setLocal] = useState(() => ({
        notes: data?.notes ?? '',
        state: data?.state ?? 'info',
    }));

    useEffect(() => {
        if (!data) {
            updateData('notes', local);
        }
    }, []);

    const handleChange = e => {
        const value = e.target.value;
        const updated = { ...local, notes: value, state: 'success' };
        setLocal(updated);
        updateData('notes', updated);
    };

    return (
        <div>
            <label>
                Notes:{' '}
                <textarea value={local.notes || ''} onChange={handleChange} />
            </label>
        </div>
    );
};

export default NotesSection;
