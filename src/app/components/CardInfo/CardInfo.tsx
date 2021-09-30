import React from 'react';
import Button from '../Button/Button';
import Icons from '../Icons/Icons';
import InfoLink from '../InfoLink/InfoLink';
import Typography from '../Typography/Typography';
import style from './CardInfo.module.css';

export type CardInfoProps = {
  type?: 'small' | 'big' | 'start';
  id: number;
  image: string;
  header: string;
  hours: string;
  days: string;
  textfield?: string;
  ingredients?: string;
  note?: string;
  onClick: () => void;
};

export const CardInfo = ({
  type = 'small',
  id,
  image,
  header,
  hours,
  days,
  textfield,
  ingredients,
  note,
  onClick,
}: CardInfoProps): JSX.Element => {
  return (
    <article
      className={`${style.card} 
      ${type === 'small' && style.cardSmall}`}
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
          <Typography
            className={style.textfieldHeader}
            size="s"
            children="Inhaltsstoffe:"
          />
          <Typography size="xs">{ingredients}</Typography>
          {note !== undefined && (
            <Typography
              className={style.textfieldHeader}
              size="s"
              children="Hinweis:"
            />
          )}
          <Typography size="xs">{note}</Typography>
        </section>
      )}
      <section className={`${style.cardButtons} ${style[type]}`}>
        {type !== 'start' && <Button onClick={onClick} children="Hinzufügen" />}
        {type === 'small' && <InfoLink to={`/info/${id}`} children="Info" />}
        {type === 'start' && (
          <>
            <Button onClick={onClick} children="Start" />
            <Button onClick={onClick} children="Entfernen" />
          </>
        )}
      </section>
    </article>
  );
};
export default CardInfo;
