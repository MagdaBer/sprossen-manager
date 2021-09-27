import React from 'react';
import CardInfo from './CardInfo';

export default {
  title: 'Component/CardInfo',
  component: CardInfo,
};

export const CardSmall = (): JSX.Element => (
  <CardInfo
    id="3"
    image="src/app/assets/images/Buckwheat.png"
    header="Sonnenblumen kerne"
    hours="8 Stunden"
    days="6 Tage"
    onClickAdd={() => console.log('Added')}
  />
);
export const CardBig = (): JSX.Element => (
  <CardInfo
    id="2"
    type="big"
    image="src/app/assets/images/Buckwheat.png"
    header="Buchweizen"
    hours="8 Stunden"
    days="6 Tage"
    textfield="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
    onClickAdd={() => console.log('Added')}
  />
);
