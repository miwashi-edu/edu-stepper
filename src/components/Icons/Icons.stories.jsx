import React from 'react';
import Icons from './Icons';

const iconNames = [
    'check',
    'close',
    'alert',
    'edit',
    'pluscircle',
    'reception',
    'addframe',
    'circle',
    'info',
    'plus',
    'plus_blue',
    'upload',
    'user_plus',
    'vector'
];

export default {
    title: 'Components/Icons',
    component: Icons,
    argTypes: {
        name: {
            control: { type: 'select' },
            options: iconNames,
        },
        width: { control: { type: 'number' }, defaultValue: 24 },
        height: { control: { type: 'number' }, defaultValue: 24 },
    },
};

export const Default = (args) => <Icons {...args} />;
Default.args = {
    name: 'check',
    width: 24,
    height: 24,
};

export const AllIcons = () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
        {iconNames.map((name) => (
            <div key={name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 80 }}>
                <Icons name={name} width={32} height={32} />
                <span style={{ fontSize: 12, marginTop: 4 }}>{name}</span>
            </div>
        ))}
    </div>
);
