import React from 'react';
import Typography from '../../components/Typography/Typography';
import style from './Home.module.css';

export default function Home(): JSX.Element {
  return (
    <main className={style.container}>
      <p>
        <Typography size="xl" children="Sprossen Manager" />
      </p>
    </main>
  );
}
