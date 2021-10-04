import React from 'react';
import CardInfo from '../../components/CardInfo/CardInfo';
import Header from '../../components/Header/Header';
import { SPROUTS } from '../../assets/lib/sprouts';
import { useParams } from 'react-router';
import style from './Info.module.css';
import useSproutCards from '../../hooks/useSproutCards';
import type { Sprout } from '../../../types';

export default function Info(): JSX.Element {
  const { addCard } = useSproutCards();
  function handleAddClick(sprout: Sprout) {
    addCard(sprout);
  }
  const { id }: { id: string } = useParams();

  const filteredSprout = SPROUTS.filter((sprout) => sprout.id === Number(id));

  return (
    <main className={style.container}>
      <Header children="Info" onClick={() => history.back()} />
      <section className={style.card}>
        {filteredSprout.map((sprout) => (
          <CardInfo
            key={sprout.id}
            type="big"
            {...sprout}
            onClickAdd={() => handleAddClick({ ...sprout, status: 'start' })}
          />
        ))}
      </section>
    </main>
  );
}
