import type { CardInfoTypes } from './app/enums/CardInfoTypes';
import type { CardStatusTypes } from './app/enums/CardStatusTypes';

export type Sprout = {
  id: number;
  image: string;
  header: string;
  hours: number;
  days: number;
  textfield: string;
  ingredients: string;
  note?: string;
  status?: CardInfoTypes.START | CardStatusTypes;
  startdate?: string;
  starttime?: string;
  enddate?: string;
  endtime?: string;
};
