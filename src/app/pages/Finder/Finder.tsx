import React from 'react';
import Header from '../../components/Header/Header';
import CardInfo from '../../components/Cards/CardInfo/CardInfo';
import { SPROUTS } from '../../lib/sprouts';
import style from '../../App.module.css';
import type { Sprout } from '../../../types';
import useSproutCards from '../../hooks/useSproutCards';
import { useHistory } from 'react-router';
import { CardTypes } from '../../enums/CardTypes';

export default function Finder(): JSX.Element {
  const history = useHistory();
  const { addCard } = useSproutCards();

  function handleAddClick(sprout: Sprout) {
    addCard(sprout);
  }

  return (
    <main className={`${style.finderPage} ${style.container}`}>
      <Header
        pageTitle="Sprossenfinder"
        className={style.header}
        onClickLeft={() => history.push('/landing')}
        onClickRight={() => history.push('/mysprouts')}
      />

      <section className={style.cards}>
        {SPROUTS.map((sprout: Sprout) => (
          <CardInfo
            key={sprout.id}
            {...sprout}
            onClickAdd={() =>
              handleAddClick({
                ...sprout,
                status: CardTypes.START,
                startdate: '',
                starttime: '',
                enddate: '',
                endtime: '',
              })
            }
          />
        ))}
      </section>
    </main>
  );
}
