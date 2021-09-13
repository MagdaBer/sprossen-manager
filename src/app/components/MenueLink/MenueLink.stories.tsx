import React from 'react';
import MenuLink from './MenueLink';
import type { MenuLinkProps } from './MenueLink';
import type { Story } from '@storybook/react';

export default {
  title: 'Component/MenueLink',
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
