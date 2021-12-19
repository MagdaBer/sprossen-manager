import React from 'react';
import Button from '../Button/Button';
import CardListRow from '../CardListRow/CardListRow';
import InfoLink from '../InfoLink/InfoLink';
import Typography from '../Typography/Typography';
import style from './CardInfo.module.css';
import { TypographyTypes } from '../../enums/TypographyTypes';
import { CardTypes } from '../../enums/CardTypes';

export type CardInfoProps = {
  type?: CardTypes;
  id: number;
  image: string;
  header: string;
  hours: number;
  days: number;
  textfield?: string;
  ingredients?: string;
  note?: string;
  startdate?: string;
  starttime?: string;
  enddate?: string;
  endtime?: string;
  onClickAdd?: () => void;
  onClickStart?: () => void;
  ClickChangeStatus: () => void;
  onClickRemove?: () => void;
};

export const CardInfo = (props: CardInfoProps): JSX.Element => {
  const {
    type = CardTypes.SMALL,
    id,
    image,
    header,
    textfield,
    ingredients,
    note,
    onClickAdd,
    onClickStart,
    onClickRemove,
  } = props;

  return (
    <article
      className={`${style.card} 
      ${type !== CardTypes.BIG && style.cardSmall}`}
    >
      <section className={style.cardContent}>
        <div className={style.cardColumnFirst}>
          <h3 className={style.cardHeader}>{header}</h3>
          <CardListRow label="hello" value="bla" />
        </div>
        <div className={style.imgContainer}>
          <img src={image} />
        </div>
      </section>

      {/*<section className={style.cardContent}>*/}
      {/*  <CardList className={style.cardColumnFirst} hours={hours} days={days} />*/}
      {/*  <img src={image} />*/}
      {/*</section>*/}
      {type === CardTypes.BIG && (
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
        {type !== CardTypes.START && (
          <Button onClick={onClickAdd} children="Hinzufügen" />
        )}
        {type === CardTypes.SMALL && (
          <InfoLink to={`/info/${id}`} children="Info" />
        )}
        {type === CardTypes.START && (
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
