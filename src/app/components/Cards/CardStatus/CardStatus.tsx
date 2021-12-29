import React from 'react';
import Button from '../../Button/Button';
import Icons from '../../Icon/Icon';
import style from '../../../App.module.css';
import { CardTypes } from '../../../enums/CardTypes';
import { IconTypes } from '../../../enums/IconTypes';
import CardList from '../../CardList/CardList';

type CardStatusProps = {
  id: number;
  image: string;
  header: string;
  type?: CardTypes;
  hours: number;
  days: number;
  startdate?: string;
  starttime?: string;
  enddate?: string;
  endtime?: string;
  onClickChangeStatus: () => void;
  onClickRemove: () => void;
};
export const CardStatus = (props: CardStatusProps): JSX.Element => {
  const {
    id,
    image,
    header,
    type = CardTypes.BEGIN,
    hours,
    days,
    startdate,
    starttime,
    enddate,
    endtime,
    onClickChangeStatus,
    onClickRemove,
  } = props;

  const listDataHead = [
    {
      key: 'Status: ',
      value: `${type === CardTypes.BEGIN ? 'Einweichen' : 'Keimen'}`,
    },
    {
      key: 'Dauer: ',
      value: `${
        type === CardTypes.BEGIN ? hours + ' ' + 'Stunden' : days + ' ' + 'Tage'
      }`,
    },
  ];

  const listDataContent = [
    {
      key: 'Start: ',
      value: `${startdate} um ${starttime}`,
    },
    {
      key: 'Fertig: ',
      value: `${enddate} um ${endtime}`,
    },
  ];

  const cardContentIcon =
    type === CardTypes.BEGIN ? IconTypes.DROPBIG : IconTypes.LEAFBIG;

  return (
    <article className={style.card} key={id}>
      {/* Maybe own component BEGIN */}
      <section className={style.cardContent}>
        <div className={style.cardColumnFirst}>
          <h3 className={style.heading}>{header}</h3>
          <CardList data={listDataHead} />
        </div>
        <div className={style.imgContainer}>
          <img src={image} />
        </div>
      </section>
      <section className={style.cardContent}>
        <CardList data={listDataContent} />
        <Icons className={style.icon} iconType={cardContentIcon} />
      </section>
      <section className={style.cardButtons}>
        <Button onClick={onClickChangeStatus} children="Status ändern" />
        <Button onClick={onClickRemove} children="Entfernen" />
      </section>
    </article>
  );
};
export default CardStatus;
