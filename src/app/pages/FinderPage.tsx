import React from 'react';
import Header from '../components/Header/Header';
import CardInfo from '../components/Cards/CardInfo';
import { SPROUTS } from '../lib/sprouts';
import '../App.less';
import type { Sprout } from '../../types';
import useSproutCards from '../hooks/useSproutCards';
import { useHistory } from 'react-router';
import { CardTypes } from '../enums/CardTypes';

export default function FinderPage(): JSX.Element {
  const history = useHistory();
  const { addCard } = useSproutCards();

  function handleAddClick(sprout: Sprout) {
    addCard(sprout);
  }

  return (
    <main className="pageContainer">
      <Header
        pageTitle="Sprossenfinder"
        onClickLeft={() => history.push('/menu')}
        onClickRight={() => history.push('/mysprouts')}
      />

      <section className="pageCards">
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
