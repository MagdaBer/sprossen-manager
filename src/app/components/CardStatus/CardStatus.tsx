import React from 'react';
import Button from '../Button/Button';
import Icons from '../Icons/Icons';
import Typography from '../Typography/Typography';
import style from './CardStatus.module.css';

type CardStatusProps = {
  image: string;
  header: string;
  status?: 'Einweichen' | 'Keimen';
  hours: string;
  days: string;
  startdate: string;
  starttime: string;
  enddate: string;
  endtime: string;
  onClickChangeStatus: () => void;
  onClickRemove: () => void;
};
export const CardStatus = ({
  image,
  header,
  status = 'Einweichen',
  hours,
  days,
  startdate,
  starttime,
  enddate,
  endtime,
  onClickChangeStatus,
  onClickRemove,
}: CardStatusProps): JSX.Element => {
  return (
    <article className={style.card}>
      <div className={style.circle} />
      <img className={style.image} src={image} />
      <section className={style.cardContent}>
        <Typography size="m" className={style.header} children={header} />
        <Typography size="s" className={style.text} children="Status:" />
        <Typography size="s" className={style.status} children={status} />
        <Typography size="s" className={style.duration} children="Dauer:" />
        <Typography
          size="s"
          className={style.text}
          children={`${status === 'Einweichen' ? hours : days}`}
        />
        <Typography size="s" className={style.text} children="Gestartet:" />
        <Typography
          size="s"
          className={style.time}
          children={`${startdate} um ${starttime}`}
        />
        <Typography size="s" className={style.text} children="Fertig:" />
        <Typography
          size="s"
          className={style.time}
          children={`${enddate} um ${endtime}`}
        />
        <Icons
          iconType={`${status === 'Einweichen' ? 'dropBig' : 'leafBig'}`}
        />
        <section className={style.cardButtons}>
          <Button onClick={onClickChangeStatus} children="Status ändern" />
          <Button onClick={onClickRemove} children="Entfernen" />
        </section>
      </section>
    </article>
  );
};
export default CardStatus;
