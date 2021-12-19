import React from 'react';
import CardListRow from '../CardListRow/CardListRow';
import style from './CardList.module.css';
import type { IconType } from '../Icon/Icon';

type CardListProps = {
  data: {
    key: string;
    value: string;
    iconType?: IconType;
  }[];
  className?: string;
};

const CardList = (props: CardListProps): JSX.Element => {
  const { className, data } = props;
  return (
    <div className={`${style.cardList} ${className}`}>
      {data.map((dataItem) => (
        <CardListRow
          label={dataItem.key}
          value={dataItem.value}
          iconType={dataItem.iconType}
        />
      ))}
    </div>
  );
};
export default CardList;
