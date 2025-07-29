import React, { useState } from 'react';
import styles from './Stepper.module.css';
import {
  CustomerSection,
  HomeTypeSection,
  HomeStyleSection,
  BudgetSection,
  NotesSection,
  SummarySection,
} from '../sections'

const Stepper = ({ initialData, initialStep = 1 }) => {
  const [currentStep, setCurrentStep] = useState(initialStep);
  const [data, setData] = useState(initialData);

  const updateData = (section, partial) => {
    if (typeof partial !== 'object') {
      console.error('updateData requires a partial object, got:', partial);
      return;
    }

    setData(prev => ({
      ...prev,
      [section]: {
        ...(prev[section] || {}),
        ...partial,
      },
    }));
  };

  const steps = [
    { key: 'customer', label: 'Customer', component: <CustomerSection data={data.customer} /> },
    { key: 'homeType', label: 'Home Type', component: <HomeTypeSection data={data.homeType} /> },
    { key: 'homeStyle', label: 'Home Style', component: <HomeStyleSection data={data.homeStyle} /> },
    { key: 'budget', label: 'Budget', component: <BudgetSection data={data.budget} updateData={updateData}/> },
    { key: 'notes', label: 'Notes', component: <NotesSection data={data.notes} /> },
    { key: 'summary', label: 'Summary', component: <SummarySection data={data} /> },
  ];

  return (
      <div>
        <div className={styles.stepper}>
          {steps.map((step, index) => {
            const state = data[step.key]?.state || 'init';
            return (
                <div
                    key={index}
                    className={`${styles.step} ${currentStep === index + 1 ? styles.active : ''} ${styles[state]}`}
                    onClick={() => setCurrentStep(index + 1)}
                >
                  {step.label}
                </div>
            );
          })}
        </div>

        <div className={styles.stepContent}>
          {steps[currentStep - 1]?.component}
        </div>
      </div>
  )
};

export default Stepper;
