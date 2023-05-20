import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
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
        avatar: 'https://sun9-7.userapi.com/impg/n4CCJ6Xcsb7PLH5QnoJYeOltd6G3U9f7Z_s2XQ/0EIsUVXrv4M.jpg?size=607x1080&quality=96&sign=2b948ae5876f00c28603719e5c683d61&type=album',
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
        avatar: 'https://sun9-7.userapi.com/impg/n4CCJ6Xcsb7PLH5QnoJYeOltd6G3U9f7Z_s2XQ/0EIsUVXrv4M.jpg?size=607x1080&quality=96&sign=2b948ae5876f00c28603719e5c683d61&type=album',
    },
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
