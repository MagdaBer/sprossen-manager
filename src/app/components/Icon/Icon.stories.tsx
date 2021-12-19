import React from 'react';
import Icons from './Icon';
import type { Story } from '@storybook/react';
import type { IconProps } from './Icon';

export default {
  title: 'Component/Icon',
  component: Icons,
  argTypes: {
    iconType: {
      options: ['dropBig', 'dropSmall', 'leafSmall', 'leafBig'],
      control: { type: 'select' },
    },
  },
};

const Template: Story<IconProps> = (args) => <Icon {...args} />;

export const Icon = Template.bind({});
Icon.args = {};
