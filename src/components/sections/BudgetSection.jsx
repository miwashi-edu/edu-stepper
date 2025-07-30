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

    const handleChange = (value) => {
        const updated = { ...local, budget: value, state: 'success' };
        setLocal(updated);
        updateData('budget', updated);
    };


    const alert = {
        title: "Add the service fee or specific budget for the proposal",
        alt: "The service fee selected successfully!",
        type:data?.state,
    }

    return (
        <Section
            key="budget-type"
            title='Service Fee'
            alert={alert}
            choices={choices}
            hasOther={true}
            handleChange = {handleChange}
        />
    );
};

export default BudgetSection;
