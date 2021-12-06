import React from 'react';
import Header from '../../components/Header/Header';
import CardInfo from '../../components/CardInfo/CardInfo';
import {SPROUTS} from '../../lib/sprouts';
import style from './Finder.module.css';
import type {Sprout} from '../../../types';
import useSproutCards from '../../hooks/useSproutCards';
import InfoLink from '../../components/InfoLink/InfoLink';
import {useHistory} from 'react-router';
import {CardInfoTypes} from "../../enums/CardInfoTypes";
import {InfoLinkTypes} from "../../enums/InfoLinkTypes";

export default function Finder(): JSX.Element {
  const history = useHistory();
  const { addCard } = useSproutCards();
  function handleAddClick(sprout: Sprout) {
    addCard(sprout);
  }

  return (
    <main className={style.container}>
      <Header
        children="Sprossenfinder"
        onClick={() => history.push('/landing')}
      />
      <InfoLink
        className={style.link}
        type={InfoLinkTypes.BIG}
        children="Meine Sprossen"
        to="/mysprouts"
      />
      <section className={style.cards}>
        {SPROUTS.map((sprout) => (
          <div key={sprout.id}>
            <CardInfo
              {...sprout}
              onClickAdd={() =>
                handleAddClick({
                  ...sprout,
                  status: CardInfoTypes.START,
                  startdate: '',
                  starttime: '',
                  enddate: '',
                  endtime: '',
                })
              }
            />
          </div>
        ))}
      </section>
    </main>
  );
}
