import React from 'react';
import MenuLink from './MenuLink';
import type { MenuLinkProps } from './MenuLink';
import type { Story } from '@storybook/react';

export default {
  title: 'Component/MenuLink',
  component: MenuLink,
  argTypes: {
    children: {
      options: ['Sprossenfinder', 'Meine Sprossen'],
      control: { type: 'select' },
    },
  },
};

const Template: Story<MenuLinkProps> = (args) => <MenuLink {...args} />;

export const Menubutton = Template.bind({});
Menubutton.args = {};
