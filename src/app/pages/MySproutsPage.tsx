import React from 'react';
import Header from '../components/Header/Header';
import '../App.less';
import useSproutCards from '../hooks/useSproutCards';
import type { Sprout } from '../../types';
import CardInfo from '../components/Cards/CardInfo';
import CardStatus from '../components/Cards/CardStatus';
import { addDays, addHours, format } from 'date-fns';
import AddButton from '../components/AddButton/AddButton';
import { CardTypes } from '../enums/CardTypes';
import { useHistory } from 'react-router';

export default function MySproutsPage(): JSX.Element {
  const { sprouts, editCard, removeCard } = useSproutCards();
  const history = useHistory();

  function handleOnClickStart(sprout: Sprout) {
    const current = new Date();
    const startDay = format(current, 'dd.MM');
    const startTime = `${format(current, 'HH:mm')} Uhr`;
    const future = addHours(current, sprout.hours);
    const endDay = format(future, 'dd.MM');
    const endTime = `${format(future, 'HH:mm')} Uhr`;
    editCard({
      ...sprout,
      status: CardTypes.BEGIN,
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
      case CardTypes.BEGIN:
        editCard({
          ...sprout,
          status: CardTypes.PROGRESS,
          startdate: `${startDay}`,
          starttime: `${startTime}`,
          enddate: `${endDayGerminate}`,
          endtime: `${endTimeGerminate}`,
        });

        break;
      case CardTypes.PROGRESS:
        editCard({
          ...sprout,
          status: CardTypes.BEGIN,
          startdate: `${startDay}`,
          starttime: `${startTime}`,
          enddate: `${endDaySoak}`,
          endtime: `${endTimeSoak}`,
        });
    }
  }

  return (
    <main className="pageContainer">
      <Header
        pageTitle="Meine Sprossen"
        onClickLeft={() => history.push('/finder')}
      />
      {sprouts.length === 0 && (
        <section className="mySproutsPage__addButton">
          <AddButton />
        </section>
      )}
      <section className="pageCards">
        {sprouts.map((sprout) => {
          switch (sprout.status) {
            case CardTypes.START:
            case undefined:
              return (
                <CardInfo
                  key={sprout.id}
                  id={sprout.id}
                  image={sprout.image}
                  header={sprout.header}
                  hours={sprout.hours}
                  days={sprout.days}
                  type={CardTypes.START}
                  onClickStart={() => handleOnClickStart(sprout)}
                  onClickRemove={() => handleOnClickRemove(sprout)}
                />
              );
            case CardTypes.BEGIN:
            case CardTypes.PROGRESS:
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

            default:
              return null;
          }
        })}
      </section>
    </main>
  );
}
