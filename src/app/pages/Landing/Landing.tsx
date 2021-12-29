import React from 'react';
import MenuLink from '../../components/MenuLink/MenuLink';
import style from '../../App.module.css';

export default function Landing(): JSX.Element {
  return (
    <main className={style.container}>
      <MenuLink className={style.menu} to="/finder" children="Sprossenfinder" />
      <MenuLink
        className={style.menu}
        to="/mysprouts"
        children="Meine Sprossen"
      />
    </main>
  );
}
