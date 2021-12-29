import React from 'react';
import style from '../../App.module.css';
import { Link } from 'react-router-dom';

export default function Home(): JSX.Element {
  return (
    <main className={`${style.homePage} ${style.container}`}>
      <Link to="/landing" className={style.homePageEntranceLink}>
        <h1>Sprossen Manager</h1>
      </Link>
    </main>
  );
}
