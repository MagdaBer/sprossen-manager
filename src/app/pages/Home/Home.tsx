import React from 'react';
import Typography from '../../components/Typography/Typography';
import style from './Home.module.css';
import { Link } from 'react-router-dom';

export default function Home(): JSX.Element {
  return (
    <main className={style.container}>
      <Link to="/menu" className={style.header}>
        <Typography size="xl" children="Sprossen Manager" />
      </Link>
    </main>
  );
}
