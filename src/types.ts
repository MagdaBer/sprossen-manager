import type { CardTypes } from './app/enums/CardTypes';

type SproutContent = {
  headline?: string;
  content: string;
};

export type Sprout = {
  id: number;
  image: string;
  header: string;
  hours: number;
  days: number;
  textfield?: SproutContent;
  ingredients?: SproutContent;
  note?: SproutContent;
  status?: CardTypes;
  startdate?: string;
  starttime?: string;
  enddate?: string;
  endtime?: string;
};
