import React from 'react';
import CardInfo from '../../components/Cards/CardInfo/CardInfo';
import Header from '../../components/Header/Header';
import { SPROUTS } from '../../lib/sprouts';
import { useParams } from 'react-router';
import style from '../../App.module.css';
import useSproutCards from '../../hooks/useSproutCards';
import type { Sprout } from '../../../types';
import { CardTypes } from '../../enums/CardTypes';
import { useHistory } from 'react-router';

export default function Info(): JSX.Element {
  const { addCard } = useSproutCards();
  function handleAddClick(sprout: Sprout) {
    addCard(sprout);
  }
  const { id }: { id: string } = useParams();
  const history = useHistory();

  const filteredSprout = SPROUTS.filter((sprout) => sprout.id === Number(id));

  return (
    <main className={style.container}>
      <Header
        pageTitle="Info"
        onClickLeft={() => history.push('/finder')}
        onClickRight={() => history.push('/mysprouts')}
      />
      <section className={style.cards}>
        {filteredSprout.map((sprout) => (
          <CardInfo
            key={sprout.id}
            type={CardTypes.BIG}
            {...sprout}
            onClickAdd={() =>
              handleAddClick({ ...sprout, status: CardTypes.START })
            }
          />
        ))}
      </section>
    </main>
  );
}
