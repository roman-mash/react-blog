import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ListBox } from './ListBox';

export default {
    title: 'shared/Popups/ListBox',
    component: ListBox,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        (Story) => (
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh',
                }}
            >
                <Story />
            </div>
        ),
    ],
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => (
    <ListBox {...args} />
);

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

export const TopLeft = Template.bind({});
TopLeft.args = {
    defaultValue: 'top left',
    direction: 'top left',
    items: [
        { value: '1', content: 'first' },
        { value: '2', content: 'second' },
        { value: '3', content: 'third' },
        { value: '4', content: 'forth', disabled: true },
        { value: '5', content: 'fifth' },
    ],
};
export const TopRight = Template.bind({});
TopRight.args = {
    defaultValue: 'top right',
    direction: 'top right',
    items: [
        { value: '1', content: 'first' },
        { value: '2', content: 'second' },
        { value: '3', content: 'third' },
        { value: '4', content: 'forth', disabled: true },
        { value: '5', content: 'fifth' },
    ],
};

export const BottomLeft = Template.bind({});
BottomLeft.args = {
    defaultValue: 'bottom left',
    direction: 'bottom left',
    items: [
        { value: '1', content: 'first' },
        { value: '2', content: 'second' },
        { value: '3', content: 'third' },
        { value: '4', content: 'forth', disabled: true },
        { value: '5', content: 'fifth' },
    ],
};

export const BottomRight = Template.bind({});
BottomRight.args = {
    defaultValue: 'bottom right',
    direction: 'bottom right',
    items: [
        { value: '1', content: 'first' },
        { value: '2', content: 'second' },
        { value: '3', content: 'third' },
        { value: '4', content: 'forth', disabled: true },
        { value: '5', content: 'fifth' },
    ],
};
