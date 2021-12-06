import React from 'react';
import Header from '../../components/Header/Header';
import style from './MySprouts.module.css';
import useSproutCards from '../../hooks/useSproutCards';
import type {Sprout} from '../../../types';
import CardInfo from '../../components/CardInfo/CardInfo';
import CardStatus from '../../components/CardStatus/CardStatus';
import {addDays, addHours, format} from 'date-fns';
import AddButton from '../../components/AddButton/AddButton';
import {CardInfoTypes} from "../../enums/CardInfoTypes";
import {CardStatusTypes} from "../../enums/CardStatusTypes";


export default function MySprouts(): JSX.Element {
  const { sprouts, editCard, removeCard } = useSproutCards();

  function handleOnClickStart(sprout: Sprout) {
    const current = new Date();
    const startDay = format(current, 'dd.MM');
    const startTime = `${format(current, 'HH:mm')} Uhr`;
    const future = addHours(current, sprout.hours);
    const endDay = format(future, 'dd.MM');
    const endTime = `${format(future, 'HH:mm')} Uhr`;
    editCard({
      ...sprout,
      status: CardStatusTypes.BEGIN,
      startdate: `${startDay}`,
      starttime: `${startTime}`,
      enddate: `${endDay}`,
      endtime: `${endTime}`,
    });
  }

  function handleOnClickRemove(sprout: Sprout) {
    removeCard(sprout);
  }

  function handleOnClickStatus(sprout: Sprout) {
    const current = new Date();
    const startDay = format(current, 'dd.MM');
    const startTime = `${format(current, 'HH:mm')} Uhr`;
    const futureGerminate = addDays(current, sprout.days);
    const futureSoak = addHours(current, sprout.hours);
    const endDayGerminate = format(futureGerminate, 'dd.MM');
    const endTimeGerminate = `${format(futureGerminate, 'HH:mm')} Uhr`;
    const endDaySoak = format(futureSoak, 'dd.MM');
    const endTimeSoak = `${format(futureSoak, 'HH:mm')} Uhr`;
    switch (sprout.status) {
      case CardStatusTypes.BEGIN:
        editCard({
          ...sprout,
          status: CardStatusTypes.PROGRESS,
          startdate: `${startDay}`,
          starttime: `${startTime}`,
          enddate: `${endDayGerminate}`,
          endtime: `${endTimeGerminate}`,
        });

        break;
      case CardStatusTypes.PROGRESS:
        editCard({
          ...sprout,
          status: CardStatusTypes.BEGIN,
          startdate: `${startDay}`,
          starttime: `${startTime}`,
          enddate: `${endDaySoak}`,
          endtime: `${endTimeSoak}`,
        });
    }
  }

  return (
    <main className={style.container}>
      <Header
        className={style.header}
        children="Meine Sprossen"
        onClick={() => history.back()}
      />
      {sprouts.length === 0 && (
        <section className={style.addButton}>
          <AddButton />
        </section>
      )}
      <section className={style.cards}>
        {sprouts.map((sprout) => {
          switch (sprout.status) {
            case CardInfoTypes.START:
            case undefined:
              return (
                <CardInfo
                  key={sprout.id}
                  id={sprout.id}
                  image={sprout.image}
                  header={sprout.header}
                  hours={sprout.hours}
                  days={sprout.days}
                  type={CardInfoTypes.START}
                  onClickStart={() => handleOnClickStart(sprout)}
                  onClickRemove={() => handleOnClickRemove(sprout)}
                />
              );
            case CardStatusTypes.BEGIN:
            case CardStatusTypes.PROGRESS:
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
                  enddate={sprout.enddate}
                  endtime={sprout.endtime}
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
