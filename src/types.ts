import type { CardTypes } from './app/enums/CardTypes';

export type Sprout = {
  id: number;
  image: string;
  header: string;
  hours: number;
  days: number;
  textfield: string;
  ingredients: string;
  note?: string;
  status?: CardTypes;
  startdate?: string;
  starttime?: string;
  enddate?: string;
  endtime?: string;
};
