import React from 'react';
import Button from '../Button/Button';
import Icons from '../Icons/Icons';
import Typography from '../Typography/Typography';
import style from './CardStatus.module.css';
import {CardStatusTypes} from "../../enums/CardStatusTypes";
import {TypographyTypes} from "../../enums/TypographyTypes";
import {IconTypes} from "../../enums/IconTypes";

type CardStatusProps = {
  id: number;
  image: string;
  header: string;
  type?: CardStatusTypes;
  hours: number;
  days: number;
  startdate?: string;
  starttime?: string;
  enddate?: string;
  endtime?: string;
  onClickChangeStatus: () => void;
  onClickRemove: () => void;
};
export const CardStatus = ({
  id,
  image,
  header,
  type = CardStatusTypes.BEGIN,
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
    <article className={style.card} key={id}>
      <div className={style.circle} />
      <img className={style.image} src={image} alt="sprout"/>
      <Typography size={TypographyTypes.M} className={style.header} children={header} />

      <section className={style.cardHead}>
        <Typography size={TypographyTypes.S} className={style.textHead} children="Status:" />
        <Typography
          size={TypographyTypes.S}
          className={style.timeHead}
          children={`${type === CardStatusTypes.BEGIN ? 'Einweichen' : 'Keimen'}`}
        />
        <Typography size={TypographyTypes.S} className={style.textHead} children="Dauer:" />
        <Typography
          size={TypographyTypes.S}
          className={style.timeHead}
          children={`${
            type === CardStatusTypes.BEGIN ? hours + ' ' + 'Stunden' : days + ' ' + 'Tage'
          }`}
        />
      </section>
      <section className={style.cardBottom}>
        <Typography size={TypographyTypes.S} className={style.textBottom} children="Start:" />
        <Typography size={TypographyTypes.S} className={style.day} children={startdate} />
        <Typography size={TypographyTypes.S} className={style.connector} children="um" />
        <Typography
          size={TypographyTypes.S}
          className={style.timeBottom}
          children={starttime}
        />
        <Typography size={TypographyTypes.S} className={style.textBottom} children="Fertig:" />
        <Typography size={TypographyTypes.S} className={style.day} children={enddate} />
        <Typography size={TypographyTypes.S} className={style.connector} children="um" />
        <Typography size={TypographyTypes.S} className={style.timeBottom} children={endtime} />
        <Icons
          className={style.icon}
          iconType={type === CardStatusTypes.BEGIN ? IconTypes.DROPBIG : IconTypes.LEAFBIG}
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
