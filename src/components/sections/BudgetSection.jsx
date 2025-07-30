import { useEffect, useState } from 'react';
import {defaultBudgetTypes as choices} from './defaults';
import {Section} from '../Section';
import styles from "./sections.module.css";

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


    const alert = {
        title: "Add the service fee or specific budget for the proposal",
        alt: "The service fee selected successfully!",
        type: "info",
    }

    return (
        <Section
            key="budget-type"
            title='Service Fee'
            state={data?.state}
            alert={alert}
            choices={choices}
            hasOther={true}
        />
    );
};

export default BudgetSection;
