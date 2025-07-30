import React from 'react';
import ChoiceGroup from './ChoiceGroup';
import { defaultBudgetTypes, defaultHomeTypes, defaultHomeStyles } from './defaults';
export default {
    title: 'Components/Choices/ChoiceGroup',
    component: ChoiceGroup
};

export const Default = {
    args:{
        choices: defaultBudgetTypes,
        hasOther: true,
    }
}

export const BudgetTypes = {
    args:{
        choices: defaultBudgetTypes
    }
}

export const HomeTypes = {
    args:{
        choices: defaultHomeTypes
    }
}

export const HomeStyles = {
    args:{
        choices: defaultHomeStyles
    }
}