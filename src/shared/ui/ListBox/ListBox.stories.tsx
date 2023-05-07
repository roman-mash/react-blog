import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ListBox } from './ListBox';

export default {
    title: 'shared/ListBox',
    component: ListBox,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    defaultValue: 'Choose value',
    onChange: (value: string) => {},
    value: undefined,
    items: [
        { value: '1', content: 'first' },
        { value: '2', content: 'second' },
        { value: '3', content: 'third' },
        { value: '4', content: 'forth', disabled: true },
        { value: '5', content: 'fifth' },
    ],
};
