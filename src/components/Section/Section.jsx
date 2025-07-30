import React from 'react';
import styles from './Section.module.css';
import SectionTitle from './SectionTitle';
import SectionAlert from './SectionAlert';
import {ChoiceGroup} from '../Choices';

export const Section = ({title, alert, choices, hasOther = false, handleChange}) => {
    const errors = [];
    console.log(alert);

    const handleNewChange = (value) => {
        handleChange(value)
    }

    if (typeof title !== 'string' || title.trim() === '') {
        errors.push('title must be a non-empty string');
    }
    if (typeof hasOther !== 'boolean') {
        errors.push('hasOther must be a boolean');
    }
    if (!Array.isArray(choices)) {
        errors.push('choices must be an array');
    }
    if (
        typeof alert !== 'object' ||
        typeof alert.title !== 'string' ||
        typeof alert.alt !== 'string'
    ) {
        errors.push('alert must be an object with type, title, and alt strings');
    }

    if (errors.length > 0) {
        return <span>Invalid props: {errors.join(', ')}</span>;
    }

    return (
        <section className={styles['budget-section']}>
            <SectionTitle>{title}</SectionTitle>

            <SectionAlert type={alert.type}>
                <span>{alert.type === 'info' ? alert.title : alert.alt}</span>
            </SectionAlert>

            <ChoiceGroup choices={choices} hasOther={hasOther} handleChange={handleNewChange}/>
        </section>
    );
};
