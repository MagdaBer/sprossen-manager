import React from 'react';
import Button from '../Button/Button';
import Icons from '../Icons/Icons';
import InfoLink from '../InfoLink/InfoLink';
import Typography from '../Typography/Typography';
import style from './CardInfo.module.css';

export type CardInfoProps = {
  type?: 'small' | 'big';
  image: string;
  header: string;
  hours: string;
  days: string;
  textfield?: string;
  onClickAdd: () => void;
};

export const CardInfo = ({
  type = 'small',
  image,
  header,
  hours,
  days,
  textfield,
  onClickAdd,
}: CardInfoProps): JSX.Element => {
  return (
    <article
      className={`${style.card} 
      ${type === 'small' ? style.cardSmall : style.cardBig}`}
    >
      <div className={style.circle} />
      <img className={style.image} src={image} />
      <section className={style.cardContent}>
        <Typography size="m" className={style.header}>
          {header}
        </Typography>
        <Icons className={style.icons} iconType="dropSmall" />
        <Typography className={style.text} size="s">
          Einweichen:
        </Typography>
        <Typography className={style.time} size="s">
          {hours}
        </Typography>
        <Icons className={style.icons} iconType="leafSmall" />
        <Typography className={style.text} size="s">
          Keimen:
        </Typography>
        <Typography className={style.time} size="s">
          {days}
        </Typography>
      </section>
      {type === 'big' && (
        <section className={style.textfield}>
          <Typography size="xs">{textfield}</Typography>
        </section>
      )}
      <section className={style.cardButtons}>
        <Button onClick={onClickAdd} children="Hinzufügen" />
        {type === 'small' && <InfoLink children="Info" />}
      </section>
    </article>
  );
};
export default CardInfo;
