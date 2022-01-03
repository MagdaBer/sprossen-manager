import React from 'react';
import MenuLink from '../components/MenuLink/MenuLink';
import '../App.less';

export default function MenuPage(): JSX.Element {
  return (
    <main className="pageContainer menuPage">
      <MenuLink
        className="menuPage__button"
        to="/finder"
        children="Sprossenfinder"
      />
      <MenuLink
        className="menuPage__button"
        to="/mysprouts"
        children="Meine Sprossen"
      />
    </main>
  );
}
