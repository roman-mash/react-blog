import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { action } from '@storybook/addon-actions';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Tabs } from './Tabs';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/Tabs',
    component: Tabs,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    tabs: [
        {
            value: 'IT',
            content: 'IT',
        },
        {
            value: 'Economics',
            content: 'Economics',
        },
        {
            value: 'Science',
            content: 'Science',
        },
    ],
    value: 'Economics',
    onTabClick: action('onTabClick'),
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    tabs: [
        {
            value: 'IT',
            content: 'IT',
        },
        {
            value: 'Economics',
            content: 'Economics',
        },
        {
            value: 'Science',
            content: 'Science',
        },
    ],
    value: 'Economics',
    onTabClick: action('onTabClick'),
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
