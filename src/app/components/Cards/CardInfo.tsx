import React from 'react';
import Button from '../Button/Button';
import InfoLink from '../InfoLink/InfoLink';
import { CardTypes } from '../../enums/CardTypes';
import '../../App.less';
import CardList from '../CardContent/CardList';
import { IconTypes } from '../../enums/IconTypes';
import type { CardTextProps } from '../CardContent/CardText';
import CardText from '../CardContent/CardText';

export type CardInfoProps = {
  type?: CardTypes;
  id: number;
  image: string;
  header: string;
  hours: number;
  days: number;
  info?: CardTextProps;
  ingredients?: CardTextProps;
  note?: CardTextProps;
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
    <article className="card">
      <section className="card__content">
        <div className="card__columnFirst">
          <h3 className="card__heading">{header}</h3>
          <section>
            <CardList data={listData} />
          </section>
        </div>
        <div className="card__imgContainer">
          <img src={image} />
        </div>
      </section>
      {type === CardTypes.BIG &&
        content.map((contentBlock) => {
          if (!contentBlock?.content?.length) {
            return null;
          }

          return (
            <section className="card__infoText">
              <CardText
                headline={contentBlock.headline}
                content={contentBlock.content}
              />
            </section>
          );
        })}
      <section className="card__buttons">
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
