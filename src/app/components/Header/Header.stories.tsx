import React from 'react';
import Header from './Header';
import type { Story } from '@storybook/react';
import type { HeaderProps } from './Header';

export default {
  title: 'Component/Header',
  component: Header,
  argTypes: {
    children: {
      options: ['Meine Sprossen', 'Sprossenfinger', 'Info'],
      control: { type: 'select' },
    },
  },
};

const Template: Story<HeaderProps> = (args) => <Header {...args} />;

export const Heading = Template.bind({});
Heading.args = {};
