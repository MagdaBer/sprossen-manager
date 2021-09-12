import React from 'react';
import MenueLink from './MenueLink';
import type { MenueLinkProps } from './MenueLink';
import type { Story } from '@storybook/react';

export default {
  title: 'Component/MenueLink',
  component: MenueLink,
  argTypes: {},
};

const Template: Story<MenueLinkProps> = (args) => <MenueLink {...args} />;

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
