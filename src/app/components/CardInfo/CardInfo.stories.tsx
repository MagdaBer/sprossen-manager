import React from 'react';
import CardInfo from './CardInfo';

export default {
  title: 'Component/CardInfo',
  component: CardInfo,
};

export const Card = (): JSX.Element => (
  <CardInfo
    image="src/app/components/assets/Buckwheat.png"
    header="Sonnenblumen kerne"
    hours="8 Stunden"
    days="6 Tage"
    onClickAdd={() => console.log('Added')}
  />
);
