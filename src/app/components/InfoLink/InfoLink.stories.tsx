import React from 'react';
import InfoLink from './InfoLink';

export default {
  title: 'Component/InfoLink',
  component: InfoLink,
};

export const info = (): JSX.Element => <InfoLink to="">Info</InfoLink>;
export const Sprossen = (): JSX.Element => (
  <InfoLink type="big" to="">
    Meine Sprossen
  </InfoLink>
);
