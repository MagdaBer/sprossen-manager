import React, { useState } from 'react';
import CardInfo from '../../components/CardInfo/CardInfo';
import Header from '../../components/Header/Header';
import { SPROUTS } from '../../lib/sprouts';
import { useParams } from 'react-router';

export default function Info(): JSX.Element {
  const { id }: { id: string } = useParams();

  const [sprouts] = useState(SPROUTS);

  function handleOnClick() {
    console.log('Add');
  }
  return (
    <main>
      <Header children="Info" onClick={() => history.back()} />
      {sprouts
        .filter((sprout) => sprout.id === id)
        .map((sprout) => (
          <CardInfo type="big" {...sprout} onClickAdd={() => handleOnClick()} />
        ))}
    </main>
  );
}
