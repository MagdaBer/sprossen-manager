import React from 'react';
import PopUpBox from './PopUpBox';
import type { PopUpBoxProps } from './PopUpBox';
import type { Story } from '@storybook/react';

export default {
  title: 'Component/PopUpBox',
  component: PopUpBox,
};

const Template: Story<PopUpBoxProps> = (args) => <PopUpBox {...args} />;

export const Info = Template.bind({});
Info.args = {
  boxType: 'infoBox',
  children: 'Bitte lasse deine Sprossen jetzt 8 Stunden einweichen',
};

export const Status = Template.bind({});
Status.args = {
  boxType: 'statusBox',
  children: 'Status ändern',
};
