import React from 'react';
import styles from './sections.module.css';
import { defaultBudgetTypes } from './defaults';
import Choice from './Choice';
import OtherChoice from './OtherChoice';

const Choices = ({ choices,selected, local, setSelected, setLocal, updateData }) => {
    const handleChange = (e) => {
        const value = e.target.value;
        const updated = { ...local, budget: value, state: 'success' };
        setLocal(updated);
        updateData('budget', updated);
    };

    return (
        <div className={styles.list}>
            {choices.map((budget, index) => (
                <div key={index} className={styles.listItem}>
                    <Choice
                        name="budget"
                        value={budget}
                        checked={selected === budget}
                        onChange={(e) => {
                            setSelected(budget);
                            handleChange(e);
                        }}
                        label={budget}
                    />
                </div>
            ))}
            <OtherChoice
                selected={selected}
                local={local}
                setSelected={setSelected}
                setLocal={setLocal}
                updateData={updateData}
            />
        </div>
    );
};

export default Choices;
