export type Sprouts = {
  sprouts: Sprout[];
};

export type Sprout = {
  id: number;
  image: string;
  header: string;
  hours: number;
  days: number;
  textfield: string;
  ingredients: string;
  note?: string;
  status?: 'start' | 'soak' | 'germinate';
  startdate?: string;
  starttime?: string;
  enddate?: string;
  endtime?: string;
};
