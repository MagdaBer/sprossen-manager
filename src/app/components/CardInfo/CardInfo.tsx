import React from 'react';
import style from './CardInfo.module.css';

export const CardInfo = (): JSX.Element => {
  return (
    <article className={style.card}>
      <div className={style.circle} />
    </article>
  );
};
export default CardInfo;
