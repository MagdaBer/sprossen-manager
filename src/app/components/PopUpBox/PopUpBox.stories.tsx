import React from 'react';
import type {PopUpBoxProps} from './PopUpBox';
import PopUpBox from './PopUpBox';
import {PopUpBoxTypes} from "../../enums/PopUpBoxTypes";
import type {Story} from "@storybook/react";

export default {
  title: 'Component/PopUpBox',
  component: PopUpBox,
};

const Template: Story<PopUpBoxProps> = (args) => <PopUpBox {...args}  />;

export const Info = Template.bind({});
Info.args = {
  boxType: PopUpBoxTypes.INFOBOX,
  children: 'Bitte lasse deine Sprossen jetzt 8 Stunden einweichen',
};

export const Status = Template.bind({});
Status.args = {
  boxType: PopUpBoxTypes.STATUSBOX,
  children: 'Status ändern',
};
