import React from 'react';
import styles from './Section.module.css';
import SectionTitle from './SectionTitle';
import SectionAlert from './SectionAlert';

export const Section = ({ title, children, alertType,alertTitle='add', alertAlternative='success' }) => {
  if (typeof title !== 'string' || title.trim() === '') {
    console.warn('Section: `title` must be a non-empty string.');
  }

  if (!children) {
    console.warn('Section: `children` is missing.');
  }

  return (
    <section className={styles['budget-section']}>
      <SectionTitle>{title || 'Untitled Section'}</SectionTitle>

      <SectionAlert type={alertType} >
                <span>
                    {alertType === 'info' ? alertTitle : alertAlternative}
                </span>
      </SectionAlert>

      {children || <p style={{ color: 'red' }}>Missing content.</p>}
    </section>
  );
};
