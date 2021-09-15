import React from 'react';
import Button from './Button';

export default {
  title: 'Component/Button',
  component: Button,
};

export const OK = (): JSX.Element => (
  <Button onClick={() => console.log('clicked')}>OK</Button>
);
export const Einweichen = (): JSX.Element => (
  <Button onClick={() => console.log('clicked')}>Einweichen</Button>
);
export const Keimen = (): JSX.Element => (
  <Button onClick={() => console.log('clicked')}>Keimen</Button>
);
export const Hinzufügen = (): JSX.Element => (
  <Button onClick={() => console.log('clicked')}>Hinzufügen</Button>
);
export const Status = (): JSX.Element => (
  <Button onClick={() => console.log('clicked')}>Status ändern</Button>
);
export const Entfernen = (): JSX.Element => (
  <Button onClick={() => console.log('clicked')}>Entfernen</Button>
);
