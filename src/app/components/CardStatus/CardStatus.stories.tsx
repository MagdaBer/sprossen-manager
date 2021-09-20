import React from 'react';
import CardStatus from './CardStatus';

export default {
  title: 'Component/CardStatus',
  component: CardStatus,
};

export const Card = (): JSX.Element => (
  <CardStatus
    image="src/app/components/assets/Buckwheat.png"
    header="Buchweizen"
    days="8 Tage"
    hours="8 Stunden"
    status="Keimen"
    startdate="03.09."
    starttime="20:00 Uhr"
    enddate="11.09."
    endtime="20:00 Uhr"
    onClickChangeStatus={() => console.log('changed')}
    onClickRemove={() => console.log('removed')}
  />
);
