export type Sprouts = {
  sprouts: Sprout[];
};

export type Sprout = {
  id: string;
  image: string;
  header: string;
  hours: string;
  days: string;
  textfield: string;
  ingredients: string;
  note?: string;
};
