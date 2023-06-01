import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { RatingCard } from './RatingCard';

export default {
    title: 'entities/Rating/RatingCard',
    component: RatingCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof RatingCard>;

const Template: ComponentStory<typeof RatingCard> = (args) => <RatingCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'Put the mark!',
};

export const Filled = Template.bind({});
Filled.args = {
    title: 'Put the mark!',
    rate: 4,
    feedbackTitle: 'Thank you!',
};
