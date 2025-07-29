import { useEffect, useState } from 'react';

const BudgetSection = ({ data, updateData }) => {
    const [local, setLocal] = useState(() => ({
        budget: data?.budget ?? '',
        state: data?.state ?? 'init',
    }));

    useEffect(() => {
        if (!data) {
            updateData('budget', local);
        }
    }, []);

    const handleChange = e => {
        const value = e.target.value;
        const updated = { ...local, budget: value, state: 'done' };
        setLocal(updated);
        updateData('budget', updated);
    };

    return (
        <div>
            <label>
                Budget:{' '}
                <input
                    value={local.budget || ''}
                    onChange={handleChange}
                />
            </label>
        </div>
    );
};

export default BudgetSection;
