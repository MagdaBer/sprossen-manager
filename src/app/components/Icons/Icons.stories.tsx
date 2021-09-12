import React from 'react';
import Icons from './Icons';
import type { Story } from '@storybook/react';
import type { IconProps } from './Icons';

export default {
  title: 'Component/Icons',
  component: Icons,
};

const Template: Story<IconProps> = (args) => <Icons {...args} />;

export const DropBig = Template.bind({});
DropBig.args = {
  iconType: 'dropBig',
};

export const DropSmall = Template.bind({});
DropSmall.args = {
  iconType: 'dropSmall',
};

export const LeafBig = Template.bind({});
LeafBig.args = {
  iconType: 'leafBig',
};

export const LeafSmall = Template.bind({});
LeafSmall.args = {
  iconType: 'leafSmall',
};
