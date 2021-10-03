import React from 'react';
import Header from '../../components/Header/Header';
import style from './MySprouts.module.css';
import useSproutCards from '../../hooks/useSproutCards';
import type { Sprout } from '../../../types';
import CardInfo from '../../components/CardInfo/CardInfo';
import CardStatus from '../../components/CardStatus/CardStatus';

export default function MySprouts(): JSX.Element {
  const { sprouts, editCard, removeCard } = useSproutCards();

  function handleOnClickStart(sprout: Sprout) {
    const current = new Date();
    const startDay = `${current.getDate()}.${current.getMonth() + 1}.`;
    const startTime = `${current.getHours()}:${current.getMinutes()} Uhr`;

    editCard({
      ...sprout,
      status: 'soak',
      startdate: `${startDay}`,
      starttime: `${startTime}`,
    });
  }

  function handleOnClickRemove(sprout: Sprout) {
    removeCard(sprout);
  }

  function handleOnClickStatus(sprout: Sprout) {
    switch (sprout.status) {
      case 'soak':
        editCard({ ...sprout, status: 'germinate' });
        break;
      case 'germinate':
        editCard({ ...sprout, status: 'soak' });
    }
  }

  return (
    <main className={style.container}>
      <Header
        className={style.header}
        children="Meine Sprossen"
        onClick={() => history.back()}
      />
      <section className={style.cards}>
        {sprouts.map((sprout) => {
          switch (sprout.status) {
            case 'start':
            case undefined:
              return (
                <CardInfo
                  key={sprout.id}
                  id={sprout.id}
                  image={sprout.image}
                  header={sprout.header}
                  hours={sprout.hours}
                  days={sprout.days}
                  type="start"
                  onClickStart={() => handleOnClickStart(sprout)}
                  onClickRemove={() => handleOnClickRemove(sprout)}
                />
              );
            case 'soak':
            case 'germinate':
              return (
                <CardStatus
                  key={sprout.id}
                  id={sprout.id}
                  image={sprout.image}
                  header={sprout.header}
                  hours={sprout.hours}
                  days={sprout.days}
                  type={sprout.status}
                  startdate={sprout.startdate}
                  starttime={sprout.starttime}
                  onClickChangeStatus={() => handleOnClickStatus(sprout)}
                  onClickRemove={() => handleOnClickRemove(sprout)}
                />
              );
          }
        })}
      </section>
    </main>
  );
}
