import React from 'react';
import Button from './Button';

export default {
  title: 'Component/Button',
  component: Button,
};

export const OK = (): JSX.Element => <Button>OK</Button>;
export const Einweichen = (): JSX.Element => <Button>Einweichen</Button>;
export const Keimen = (): JSX.Element => <Button>Keimen</Button>;
export const Hinzufügen = (): JSX.Element => <Button>Hinzufügen</Button>;
export const Status = (): JSX.Element => <Button>Status ändern</Button>;
export const Entfernen = (): JSX.Element => <Button>Entfernen</Button>;
