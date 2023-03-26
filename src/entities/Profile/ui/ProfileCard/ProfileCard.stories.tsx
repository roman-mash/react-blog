import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import AvatarImg from 'shared/assets/tests/storybook.jpg';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ProfileCard } from './ProfileCard';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    data: {
        first: 'User',
        lastname: 'Userov',
        age: 33,
        country: Country.Russia,
        currency: Currency.RUB,
        city: 'Moscow',
        username: 'admin',
        avatar: AvatarImg,
    },
};

export const WithError = Template.bind({});
WithError.args = {
    error: 'true',
};

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
};

export const Dark = Template.bind({});
Dark.args = {
    data: {
        first: 'User',
        lastname: 'Userov',
        age: 33,
        country: Country.Russia,
        currency: Currency.RUB,
        city: 'Moscow',
        username: 'admin',
        avatar: AvatarImg,
    },
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
