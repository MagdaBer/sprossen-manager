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
      <Typography size="m" className={style.header} children={header} />

      <section className={style.cardHead}>
        <Typography size="s" className={style.textHead} children="Status:" />
        <Typography size="s" className={style.timeHead} children={status} />
        <Typography size="s" className={style.textHead} children="Dauer:" />
        <Typography
          size="s"
          className={style.timeHead}
          children={`${status === 'Einweichen' ? hours : days}`}
        />
      </section>
      <section className={style.cardBottom}>
        <Typography size="s" className={style.textBottom} children="Start:" />
        <Typography size="s" className={style.day} children={startdate} />
        <Typography size="s" className={style.connector} children="um" />
        <Typography
          size="s"
          className={style.timeBottom}
          children={starttime}
        />
        <Typography size="s" className={style.textBottom} children="Fertig:" />
        <Typography size="s" className={style.day} children={enddate} />
        <Typography size="s" className={style.connector} children="um" />
        <Typography size="s" className={style.timeBottom} children={endtime} />
        <Icons
          className={style.icon}
          iconType={`${status === 'Einweichen' ? 'dropBig' : 'leafBig'}`}
        />
      </section>
      <section className={style.cardButtons}>
        <Button onClick={onClickChangeStatus} children="Status ändern" />
        <Button onClick={onClickRemove} children="Entfernen" />
      </section>
    </article>
  );
};
export default CardStatus;
