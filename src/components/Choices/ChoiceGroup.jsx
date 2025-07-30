import React, { useState } from 'react';
import styles from './Choices.module.css';
import Choice from './Choice';

const ChoiceGroup = ({choices, hasOther=false, handleChange}) => {
    const [selected, setSelected] = useState(null);

    const onChange = (value, data) => {
        console.log('onchange');
        setSelected(value);
        handleChange(data);
    };

    const onChangeOtherField = (value, data) => {
        setSelected(value);
        if(data) handleChange(data);
    };

    return (
        <div className={styles.container}>
            {choices.map((item) => (
                <div key={item.value} className={styles.row}>
                    <Choice
                        name="budget"
                        value={item.value}
                        data={item.data}
                        label={item.label}
                        checked={selected === item.value}
                        onChange={onChange}
                    />
                </div>
            ))}
            {hasOther && (
                <div className={styles.row}>
                    <Choice
                        name="budget"
                        value="other"
                        data=""
                        label="Other:"
                        checked={selected === 'other'}
                        onChange={onChangeOtherField}
                        typeable={true}
                    />
                </div>
            )}
        </div>
    );


}

export default ChoiceGroup