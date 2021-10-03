export type Sprouts = {
  sprouts: Sprout[];
};

export type Sprout = {
  id: number;
  image: string;
  header: string;
  hours: string;
  days: string;
  textfield: string;
  ingredients: string;
  note?: string;
  status?: 'start' | 'soak' | 'germinate';
  startdate?: string;
  starttime?: string;
};
