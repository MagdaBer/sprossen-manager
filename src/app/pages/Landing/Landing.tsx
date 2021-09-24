import React from 'react';
import MenuLink from '../../components/MenuLink/MenuLink';
import style from './Landing.module.css';

export default function Landing(): JSX.Element {
  return (
    <main className={style.container}>
      <MenuLink
        className={style.menuFinder}
        to="/sprossenfinder"
        children="Sprossenfinder"
      />
      <MenuLink
        className={style.menuMy}
        to="/meinesprossen"
        children="Meine Sprossen"
      />
    </main>
  );
}
