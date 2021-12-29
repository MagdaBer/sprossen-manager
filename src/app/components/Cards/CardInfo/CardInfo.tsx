import React from 'react';
import Button from '../../Button/Button';
import InfoLink from '../../InfoLink/InfoLink';
import { CardTypes } from '../../../enums/CardTypes';
import style from '../../../App.module.css';
import CardList from '../../CardList/CardList';
import { IconTypes } from '../../../enums/IconTypes';
import type { CardContentProps } from '../../CardContent/CardContent';
import CardContent from '../../CardContent/CardContent';

export type CardInfoProps = {
  type?: CardTypes;
  id: number;
  image: string;
  header: string;
  hours: number;
  days: number;
  info?: CardContentProps;
  ingredients?: CardContentProps;
  note?: CardContentProps;
  startdate?: string;
  starttime?: string;
  enddate?: string;
  endtime?: string;
  onClickAdd?: () => void;
  onClickStart?: () => void;
  onClickRemove?: () => void;
};

export const CardInfo = (props: CardInfoProps): JSX.Element => {
  const {
    type = CardTypes.SMALL,
    id,
    image,
    header,
    ingredients,
    note,
    info,
    hours,
    days,
    onClickAdd,
    onClickStart,
    onClickRemove,
  } = props;

  const listData = [
    {
      key: 'Einweichen: ',
      value: `${hours} Stunden`,
      iconType: IconTypes.DROPSMALL,
    },
    {
      key: 'Keimen: ',
      value: `${days} Tage`,
      iconType: IconTypes.LEAFSMALL,
    },
  ];

  //const content = [info,ingredients,note ];
  const content = [{ ...info }, { ...ingredients }, { ...note }];

  return (
    <article className={style.card}>
      <section className={style.cardContent}>
        <div className={style.cardColumnFirst}>
          <h3 className={style.heading}>{header}</h3>
          <section>
            <CardList data={listData} />
          </section>
        </div>
        <div className={style.imgContainer}>
          <img src={image} />
        </div>
      </section>
      {type === CardTypes.BIG &&
        content.map((contentBlock) => {
          if (!contentBlock?.content?.length) {
            return null;
          }

          return (
            <section
              className={`${style.cardContent} ${style.cardContentText}`}
            >
              <CardContent
                headline={contentBlock.headline}
                content={contentBlock.content}
              />
            </section>
          );
        })}
      <section className={style.cardButtons}>
        {type !== CardTypes.START ? (
          <Button onClick={onClickAdd} children="Hinzufügen" />
        ) : (
          <>
            <Button onClick={onClickStart} children="Start" />
            <Button onClick={onClickRemove} children="Entfernen" />
          </>
        )}
        {type === CardTypes.SMALL && (
          <InfoLink to={`/info/${id}`} children="Info" />
        )}
      </section>
    </article>
  );
};
export default CardInfo;
