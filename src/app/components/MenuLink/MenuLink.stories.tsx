import React from 'react';
import MenuLink from './MenuLink';
import type { MenuLinkProps } from './MenuLink';
import type { Story } from '@storybook/react';

export default {
  title: 'Component/MenuLink',
  component: MenuLink,
  argTypes: {},
};

const Template: Story<MenuLinkProps> = (args) => <MenuLink {...args} />;

export const Sprossenfinder = Template.bind({});
Sprossenfinder.args = {
  children: 'Sprossenfinder',
  to: '/app/components/sprossenfinder',
};

export const MeineSprossen = Template.bind({});
MeineSprossen.args = {
  children: 'Meine Sprossen',
  to: '/app/components/meinesprossen',
};
