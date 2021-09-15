import React from 'react';
import Header from './Header';

export default {
  title: 'Component/Header',
  component: Header,
};

export const meineSprossen = (): JSX.Element => (
  <Header onClick={() => console.log('clickback')}>Meine Sprossen</Header>
);
export const sprossenFinder = (): JSX.Element => (
  <Header onClick={() => console.log('clickback')}>Sprossenfinder</Header>
);
export const info = (): JSX.Element => (
  <Header onClick={() => console.log('clickback')}>Info</Header>
);
