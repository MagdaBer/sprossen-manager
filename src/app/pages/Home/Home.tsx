import React from 'react';
import Typography from '../../components/Typography/Typography';
import style from './Home.module.css';
import { Link } from 'react-router-dom';

export default function Home(): JSX.Element {
  return (
    <Link to="/menu" className={style.link}>
      <main className={style.container}>
        <Typography size="xl" children="Sprossen Manager" />
      </main>
    </Link>
  );
}
