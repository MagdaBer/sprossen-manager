import React from 'react';
import Button from '../Button/Button';
import Icons from '../Icons/Icons';
import InfoLink from '../InfoLink/InfoLink';
import Typography from '../Typography/Typography';
import style from './CardInfo.module.css';
import { CardInfoTypes } from '../../enums/CardInfoTypes';
import { TypographyTypes } from '../../enums/TypographyTypes';
import { IconTypes } from '../../enums/IconTypes';

export type CardInfoProps = {
  type?: CardInfoTypes;
  id: number;
  image: string;
  header: string;
  hours: number;
  days: number;
  textfield?: string;
  ingredients?: string;
  note?: string;
  onClickAdd?: () => void;
  onClickStart?: () => void;
  onClickRemove?: () => void;
};

export const CardInfo = ({
  type = CardInfoTypes.SMALL,
  id,
  image,
  header,
  hours,
  days,
  textfield,
  ingredients,
  note,
  onClickAdd,
  onClickStart,
  onClickRemove,
}: CardInfoProps): JSX.Element => {
  return (
    <article
      className={`${style.card} 
      ${type !== CardInfoTypes.BIG && style.cardSmall}`}
    >
      <div className={style.circle} />
      <img className={style.image} src={image} alt="sprout" />
      <section className={style.cardContent}>
        <Typography size={TypographyTypes.M} className={style.header}>
          {header}
        </Typography>
        <Icons className={style.icons} iconType={IconTypes.DROPSMALL} />
        <Typography className={style.text} size={TypographyTypes.S}>
          Einweichen:
        </Typography>
        <Typography className={style.time} size={TypographyTypes.S}>
          {hours} Stunden
        </Typography>
        <Icons className={style.icons} iconType={IconTypes.LEAFSMALL} />
        <Typography className={style.text} size={TypographyTypes.S}>
          Keimen:
        </Typography>
        <Typography className={style.time} size={TypographyTypes.S}>
          {days} Tage
        </Typography>
      </section>
      {type === CardInfoTypes.BIG && (
        <section className={style.textfield}>
          <Typography size={TypographyTypes.XS}>{textfield}</Typography>
          <Typography
            className={style.textfieldHeader}
            size={TypographyTypes.S}
            children="Inhaltsstoffe:"
          />
          <Typography size={TypographyTypes.XS}>{ingredients}</Typography>
          {note !== undefined && (
            <Typography
              className={style.textfieldHeader}
              size={TypographyTypes.S}
              children="Hinweis:"
            />
          )}
          <Typography size={TypographyTypes.XS}>{note}</Typography>
        </section>
      )}
      <section className={`${style.cardButtons} ${style[type]}`}>
        {type !== CardInfoTypes.START && (
          <Button onClick={onClickAdd} children="Hinzufügen" />
        )}
        {type === CardInfoTypes.SMALL && (
          <InfoLink to={`/info/${id}`} children="Info" />
        )}
        {type === CardInfoTypes.START && (
          <>
            <Button onClick={onClickStart} children="Start" />
            <Button onClick={onClickRemove} children="Entfernen" />
          </>
        )}
      </section>
    </article>
  );
};
export default CardInfo;
