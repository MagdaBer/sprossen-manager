import React from 'react';
import style from './CardStatus.module.css';

type CardStatusProps = {
  image: string;
};
export const CardStatus = ({ image }: CardStatusProps): JSX.Element => {
  return (
    <article className={style.card}>
      <div className={style.circle} />
      <img className={style.image} src={image} />
    </article>
  );
};
export default CardStatus;
