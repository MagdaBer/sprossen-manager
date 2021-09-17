import React from 'react';
import Button from '../Button/Button';
import Icons from '../Icons/Icons';
import InfoLink from '../InfoLink/InfoLink';
import Typography from '../Typography/Typography';
import style from './CardInfo.module.css';

export type CardInfoProps = {
  image: string;
  header: string;
  hours: string;
  days: string;
  onClickAdd: () => void;
};

export const CardInfo = ({
  image,
  header,
  hours,
  days,
  onClickAdd,
}: CardInfoProps): JSX.Element => {
  return (
    <article className={style.card}>
      <div className={style.circle} />
      <img className={style.image} src={image} />
      <section className={style.cardContent}>
        <p>
          <Typography size="m" className={style.header}>
            {header}
          </Typography>
        </p>
        <div className={style.soak}>
          <Icons iconType="dropSmall" />
          <p>
            <Typography size="s">Einweichen: {hours}</Typography>
          </p>
        </div>
        <div className={style.germinate}>
          <Icons iconType="leafSmall" />
          <p>
            <Typography size="s">Keimen: {days}</Typography>
          </p>
        </div>
      </section>
      <section className={style.cardButtons}>
        <Button onClick={onClickAdd} children="Hinzufügen" />
        <InfoLink children="Info" />
      </section>
    </article>
  );
};
export default CardInfo;
