import React from 'react';
import CardInfo from './CardInfo';
import { CardTypes } from '../../enums/CardTypes';

export default {
  title: 'Component/CardInfo',
  component: CardInfo,
};

export const CardSmall = (): JSX.Element => (
  <CardInfo
    id={1}
    image="src/app/assets/images/Buckwheat.png"
    header="Sonnenblumenkerne"
    hours={8}
    days={6}
    onClickAdd={() => console.log('Added')}
  />
);
export const CardBig = (): JSX.Element => (
  <CardInfo
    id={2}
    type={CardTypes.BIG}
    image="src/app/assets/images/Buckwheat.png"
    header="Buchweizen"
    hours={8}
    days={6}
    textfield="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
    onClickAdd={() => console.log('Added')}
  />
);

export const CardStart = (): JSX.Element => (
  <CardInfo
    id={4}
    type={CardTypes.START}
    image="src/app/assets/images/Buckwheat.png"
    header="Buchweizen"
    hours={7}
    days={6}
    onClickStart={() => console.log('start')}
    onClickRemove={() => console.log('remove')}
  />
);
