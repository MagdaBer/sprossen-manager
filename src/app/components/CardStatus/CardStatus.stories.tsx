import React from 'react';
import CardStatus from './CardStatus';

export default {
  title: 'Component/CardStatus',
  component: CardStatus,
};

export const Card = (): JSX.Element => (
  <CardStatus image="src/app/components/assets/Buckwheat.png" />
);
