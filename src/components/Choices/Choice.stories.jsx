import React from 'react';
import Choice from './Choice';

export default {
    title: 'Components/Choices/Choice',
    component: Choice,
}

export const Default = {
    args:{
        name: "Nisse",
        value: "2",
        checked: true,
        onChange: (value) => {console.log(value)},
        label: "nisse"
    }
}