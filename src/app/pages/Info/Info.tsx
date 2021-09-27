import React from 'react';
import CardInfo from '../../components/CardInfo/CardInfo';
import Header from '../../components/Header/Header';
import { SPROUTS } from '../../lib/sprouts';
import { useParams } from 'react-router';
import style from './Info.module.css';

export default function Info(): JSX.Element {
  const { id }: { id: string } = useParams();

  const filteredSprout = SPROUTS.filter((sprout) => sprout.id === id);

  function handleOnClick() {
    console.log('Add');
  }
  return (
    <main className={style.container}>
      <Header children="Info" onClick={() => history.back()} />
      <section className={style.card}>
      {filteredSprout.map((sprout) => (
        <CardInfo type="big" {...sprout} onClickAdd={() => handleOnClick()} />
      ))}
      </section>
    </main>
  );
}
