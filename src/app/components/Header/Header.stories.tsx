import React from 'react';
import Header from './Header';

export default {
  title: 'Component/Header',
  component: Header,
};

export const meineSprossen = (): JSX.Element => <Header>Meine Sprossen</Header>;
export const sprossenFinder = (): JSX.Element => (
  <Header>Sprossenfinder</Header>
);
export const info = (): JSX.Element => <Header>Info</Header>;
