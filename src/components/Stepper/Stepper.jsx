import React, { useState } from 'react';
import styles from './Stepper.module.css';
import StepTab from './StepTab';
import {
  CustomerSection,
  HomeTypeSection,
  HomeStyleSection,
  BudgetSection,
  NotesSection,
  SummarySection,
} from '../sections';

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
    {
      key: 'customer',
      label: 'Customer',
      component: <CustomerSection data={data.customer} updateData={updateData} />
    },
    {
      key: 'homeType',
      label: 'Home Type',
      component: <HomeTypeSection data={data.homeType} updateData={updateData} />
    },
    {
      key: 'homeStyle',
      label: 'Home Style',
      component: <HomeStyleSection data={data.homeStyle} updateData={updateData} />
    },
    {
      key: 'budget',
      label: 'Budget',
      component: <BudgetSection data={data.budget} updateData={updateData} />
    },
    { key: 'notes', label: 'Notes', component: <NotesSection data={data.notes} updateData={updateData} /> },
    { key: 'summary', label: 'Summary', component: <SummarySection data={data} /> },
  ];

  return (
      <div>
        <div className={styles.stepper}>
          {steps.map((step, index) => (
              <StepTab
                  key={step.key}
                  label={step.label}
                  isActive={currentStep === index + 1}
                  state={data[step.key]?.state || 'init'}
                  onClick={() => setCurrentStep(index + 1)}
              />
          ))}
        </div>

        <div className={styles.stepContent}>
          {steps[currentStep - 1]?.component}
        </div>
      </div>
  );
};

export default Stepper;
