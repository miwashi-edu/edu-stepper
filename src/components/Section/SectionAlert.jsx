import React from 'react';
import { alertStyles } from './Section.styles';
import { Icons } from '../Icons/index.js';

const iconNames = {
  info: 'info',
  warning: 'alert',
  success: 'check',
};

const SectionAlert = ({ type = 'info', children }) => {
  const style = alertStyles[type] || alertStyles.info;
  const iconName = iconNames[type] || iconNames.info;
  return (
    <div style={style}>
      <Icons name={iconName} />
      {children}
    </div>
  );
};

export default SectionAlert;