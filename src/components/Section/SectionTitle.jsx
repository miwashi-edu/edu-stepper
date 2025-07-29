import React from 'react';
import styles from './Section.module.css';

const SectionTitle = ({ children }) => {
  return (
    <h2 className={styles.budgetTitle}>{children}</h2>
  )
}

export default SectionTitle;