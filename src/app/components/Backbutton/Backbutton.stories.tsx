import React from 'react';
import Backbutton from './Backbutton';

export default {
  title: 'Component/Backbutton',
  component: Backbutton,
};
export const backButton = (): JSX.Element => (
  <Backbutton onClick={() => console.log('clicked')} />
);
