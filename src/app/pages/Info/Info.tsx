import React from 'react';
import CardInfo from '../../components/CardInfo/CardInfo';
import Header from '../../components/Header/Header';
import { SPROUTS } from '../../lib/sprouts';
import { useParams } from 'react-router';

export default function Info(): JSX.Element {
  const { id }: { id: string } = useParams();

  const filteredSprout = SPROUTS.filter((sprout) => sprout.id === id);

  function handleOnClick() {
    console.log('Add');
  }
  return (
    <main>
      <Header children="Info" onClick={() => history.back()} />
      {filteredSprout.map((sprout) => (
        <CardInfo
          key={sprout.id}
          type="big"
          {...sprout}
          onClickAdd={() => handleOnClick()}
        />
      ))}
    </main>
  );
}
