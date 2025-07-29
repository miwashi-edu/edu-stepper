import React from 'react';
import SectionAlert from './SectionAlert';

export default {
  title: 'Sections/SectionAlert',
  component: SectionAlert,
};

export const Info = () => (
  <SectionAlert type="info">This is an info alert.</SectionAlert>
);

export const Warning = () => (
  <SectionAlert type="warning">This is a warning alert.</SectionAlert>
);

export const Success = () => (
  <SectionAlert type="success">This is a success alert.</SectionAlert>
); 