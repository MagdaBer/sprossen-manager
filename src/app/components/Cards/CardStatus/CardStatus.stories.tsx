import React from 'react';
import CardStatus from './CardStatus';
import { CardTypes } from '../../../enums/CardTypes';

export default {
  title: 'Component/CardStatus',
  component: CardStatus,
};

export const CardSoak = (): JSX.Element => (
  <CardStatus
    id={1}
    image="src/app/assets/images/Buckwheat.png"
    header="Sonenblumenkerne"
    days={8}
    hours={8}
    type={CardTypes.BEGIN}
    startdate="03.09."
    starttime="20:00 Uhr"
    enddate="11.09."
    endtime="20:00 Uhr"
    onClickChangeStatus={() => console.log('changed')}
    onClickRemove={() => console.log('removed')}
  />
);
export const CardGerminate = (): JSX.Element => (
  <CardStatus
    id={2}
    image="src/app/assets/images/Buckwheat.png"
    header="Buchweizen"
    days={8}
    hours={8}
    type={CardTypes.PROGRESS}
    startdate="03.09."
    starttime="20:00 Uhr"
    enddate="11.09."
    endtime="20:00 Uhr"
    onClickChangeStatus={() => console.log('changed')}
    onClickRemove={() => console.log('removed')}
  />
);
