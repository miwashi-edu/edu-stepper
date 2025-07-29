import { useEffect, useState } from 'react';
import {defaultBudgetTypes} from './defaults';
import {Section} from '../Section';
import styles from "./sections.module.css";
import Choice from "./Choice";

const BudgetSection = ({ data, updateData }) => {
    const [selected, setSelected] = useState( data?.budget);

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

    const handleRadioChange = (e) => {
        const value = e.target.value;
        const updated = { ...local, budget: value, state: 'done' };
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



            <div className={styles.list}>
                {defaultBudgetTypes.map((budget, index) => (
                    <div key={index} className={styles.listItem}>
                        <Choice
                            name="budget"
                            value={budget}
                            checked={selected === budget}
                            onChange={handleRadioChange}
                            label={budget}
                        />
                    </div>
                ))}
                <label>
                    Budget:{' '}
                    <input
                        value={local.budget || ''}
                        onChange={handleChange}
                    />
                </label>
            </div>
        </Section>
    );
};

export default BudgetSection;
