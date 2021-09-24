import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import CardInfo from '../../components/CardInfo/CardInfo';
import { SPROUTS } from '../../lib/sprouts';

export default function Finder(): JSX.Element {
  const [sprouts] = useState(SPROUTS);

  function handleAddClick() {
    console.log('add');
  }

  return (
    <main>
      <Header children="Sprossenfinder" onClick={() => history.back()} />
      <div>
        {sprouts.map((sprout) => (
          <CardInfo {...sprout} onClickAdd={() => handleAddClick()} />
        ))}
      </div>
    </main>
  );
}
