import React from 'react';
import Header from '../../components/Header/Header';
import CardInfo from '../../components/CardInfo/CardInfo';
import { SPROUTS } from '../../lib/sprouts';
import style from './Finder.module.css';

export default function Finder(): JSX.Element {
  function handleAddClick() {
    console.log('add');
  }

  return (
    <main className={style.container}>
      <Header children="Sprossenfinder" onClick={() => history.back()} />
      <section className={style.cards}>
        {SPROUTS.map((sprout) => (
          <div>
            <CardInfo {...sprout} onClickAdd={() => handleAddClick()} />
          </div>
        ))}
      </section>
    </main>
  );
}
