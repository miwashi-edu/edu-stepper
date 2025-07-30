import React, { useState } from 'react';
import styles from './Choices.module.css';
import Choice from './Choice';

const ChoiceGroup = ({choices, hasOther=false}) => {
    const [selected, setSelected] = useState(null);

    const onChange = (value, data) => {
        console.log('Selected ID:', value);
        console.log('Selected amount:', data);
        setSelected(value);
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
                        onChange={onChange}
                        typeable={true}
                    />
                </div>
            )}
        </div>
    );


}

export default ChoiceGroup