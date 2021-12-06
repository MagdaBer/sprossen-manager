import React from 'react';
import InfoLink from './InfoLink';
import {InfoLinkTypes} from "../../enums/InfoLinkTypes";

export default {
  title: 'Component/InfoLink',
  component: InfoLink,
};

export const info = (): JSX.Element => <InfoLink to="">Info</InfoLink>;
export const Sprossen = (): JSX.Element => (
  <InfoLink type={InfoLinkTypes.BIG} to="">
    Meine Sprossen
  </InfoLink>
);
