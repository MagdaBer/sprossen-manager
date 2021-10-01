import React from 'react';
import Header from '../../components/Header/Header';
import style from './MySprouts.module.css';
import useSproutCards from '../../hooks/useSproutCards';
import type { Sprout } from '../../../types';
import CardInfo from '../../components/CardInfo/CardInfo';

export default function MySprouts(): JSX.Element {
  const { sprouts }: { sprouts: Sprout[] } = useSproutCards();

  function handleOnClickStart() {
    console.log('hello');
  }

  function handleOnClickRemove() {
    console.log('hello');
  }

  return (
    <main className={style.container}>
      <Header children="Meine Sprossen" onClick={() => history.back()} />
      <section className={style.cards}>
        {sprouts.map((sprout) => (
          <CardInfo
            id={sprout.id}
            image={sprout.image}
            header={sprout.header}
            hours={sprout.hours}
            days={sprout.days}
            type="start"
            onClickStart={() => handleOnClickStart()}
            onClickRemove={() => handleOnClickRemove()}
          />
        ))}
      </section>
    </main>
  );
}
