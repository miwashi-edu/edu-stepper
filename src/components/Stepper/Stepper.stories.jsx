import React from 'react';
import Stepper from './Stepper';

export default {
  title: 'Stepper',
  component: Stepper,
};

const initialData = {
  customer: {},
  homeStyle:{},
  homeType:{},
  budget:{},
  notes:{},
  spaceDetails:{}
};


export const Default = {
  args:{
    initialStep: '1',
    initialData: initialData,
  },
};
