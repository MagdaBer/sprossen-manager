import React from 'react';
import CardInfo from '../../components/CardInfo/CardInfo';
import Header from '../../components/Header/Header';
import style from './MySprouts.module.css';
import useSproutCards from '../../hooks/useSproutCards';

export default function MySprouts(): JSX.Element {
  const { sprouts } = useSproutCards();

  return (
    <main className={style.container}>
      <Header children="Meine Sprossen" onClick={() => history.back()} />
    </main>
  );
}
