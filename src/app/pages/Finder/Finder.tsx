import React from 'react';
import Header from '../../components/Header/Header';
import CardInfo from '../../components/CardInfo/CardInfo';
import { SPROUTS } from '../../lib/sprouts';
import style from './Finder.module.css';
import type { Sprout } from '../../../types';
import useSproutCards from '../../hooks/useSproutCards';

export default function Finder(): JSX.Element {
  const { addCard } = useSproutCards();
  function handleAddClick(sprout: Sprout) {
    addCard(sprout);
  }

  return (
    <main className={style.container}>
      <Header children="Sprossenfinder" onClick={() => history.back()} />
      <section className={style.cards}>
        {SPROUTS.map((sprout) => (
          <div key={sprout.id}>
            <CardInfo
              {...sprout}
              onClickAdd={() => handleAddClick({ ...sprout, status: 'start' })}
            />
          </div>
        ))}
      </section>
    </main>
  );
}
