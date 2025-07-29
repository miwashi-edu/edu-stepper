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
                            onChange={(e) => {
                                setSelected(budget);
                                handleRadioChange(e);
                            }}
                            label={budget}
                        />
                    </div>
                ))}
                <div className={styles.listItem}>
                    <Choice
                        name="budget"
                        value="__custom__"
                        checked={!defaultBudgetTypes.includes(selected)}
                        onChange={() => {
                            setSelected("__custom__");
                            // Still needs to updateData with current local.budget
                            updateData('budget', { ...local, state: 'done' });
                        }}
                        label="Other:"
                    />
                    <input
                        type="text"
                        value={!defaultBudgetTypes.includes(local.budget) ? local.budget : ''}
                        onChange={(e) => {
                            const value = e.target.value;
                            setLocal({ ...local, budget: value, state: 'done' });
                            updateData('budget', { ...local, budget: value, state: 'done' });
                            setSelected("__custom__");
                        }}
                        className={styles.customInput}
                    />
                </div>
            </div>
        </Section>
    );
};

export default BudgetSection;
