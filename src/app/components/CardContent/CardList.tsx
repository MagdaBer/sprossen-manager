import React from 'react';
import CardListRow from './CardListRow';
import '../../App.less';
import type { IconTypes } from '../../enums/IconTypes';

type CardListProps = {
  data: {
    key: string;
    value: string;
    iconType?: IconTypes;
  }[];
  className?: string;
};

const CardList = (props: CardListProps): JSX.Element => {
  const { className, data } = props;
  return (
    <div className={`cardContent__list ${className}`}>
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
