import React from 'react';
import Header from '../../components/Header/Header';
import style from './MySprouts.module.css';

export default function MySprouts(): JSX.Element {
  return (
    <main className={style.container}>
      <Header children="Meine Sprossen" onClick={() => history.back()} />
    </main>
  );
}
