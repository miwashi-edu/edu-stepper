import React from 'react';
import BudgetSection from './BudgetSection';

const initialData = {
    customer: {},
    homeStyle:{},
    homeType:{},
    budget:{},
    notes:{},
    spaceDetails:{}
};

export default {
    title: 'Sections/BudgetSection',
    component: BudgetSection,
}

export const Default = {
    args: {
        data: initialData.budget,
        updateData: (value) => {console.log(value)},
        hasOther: true,
    }
}