import { forwardRef, useImperativeHandle, useState, useEffect } from 'react';

const BudgetSection = ({ data, updateData }) => {
    const [local, setLocal] = useState(() => data ?? { budget: '' });

    useEffect(() => {
        if (!data || typeof data !== 'object' || data.budget === undefined) {
            updateData('budget', { budget: '0' });
        }
    }, []);

    const handleChange = e => {
        const value = e.target.value;
        setLocal({ ...local, budget: value });
        updateData('budget', { budget: value });
    };

    return (
        <div>
            <label>
                Name:{' '}
                <input value={local.budget} onChange={handleChange} />
            </label>
        </div>
    );
};

export default BudgetSection;
