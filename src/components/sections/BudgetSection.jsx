import { useEffect, useState } from 'react';
import {defaultBudgetTypes} from './defaults';
import {Section} from '../Section';
import styles from "./sections.module.css";
import Choices from "./Choices";

const BudgetSection = ({ data, updateData }) => {
    const [selected, setSelected] = useState( data?.budget);
    const [local, setLocal] = useState(() => ({
        budget: data?.budget ?? '',
        state: data?.state ?? 'info',
    }));

    useEffect(() => {
        if (!data) {
            updateData('budget', local);
        }
    }, []);

    const handleChange = e => {
        const value = e.target.value;
        const updated = { ...local, budget: value, state: 'success' };
        setLocal(updated);
        updateData('budget', updated);
    };

    return (
        <Section
            key="budget-type"
            title='Service Fee'
            state={data?.state}
            alertTitle='Add the service fee or specific budget for the proposal.'
            alertAlternative='The service fee selected successfully!'
        >
            <Choices
                choices={defaultBudgetTypes}
                selected={selected}
                local={local}
                setSelected={setSelected}
                setLocal={setLocal}
                updateData={updateData}
            />
        </Section>
    );
};

export default BudgetSection;
