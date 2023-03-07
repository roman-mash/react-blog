import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from './Input';

export default {
    title: 'shared/Input',
    component: Input,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    placeholder: 'Primary',
    value: '123456',
};

export const Dark = Template.bind({});
Dark.args = {
    placeholder: 'Primary',
    value: '123456',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
