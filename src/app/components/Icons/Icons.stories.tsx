import React from 'react';
import Icons from './Icons';
import type { Story } from '@storybook/react';
import type { IconProps } from './Icons';

export default {
  title: 'Component/Icons',
  component: Icons,
  argTypes: {
    iconType: {
      options: ['dropBig', 'dropSmall', 'leafSmall', 'leafBig'],
      control: { type: 'select' },
    },
  },
};

const Template: Story<IconProps> = (args) => <Icons {...args} />;

export const Icon = Template.bind({});
Icon.args = {};
