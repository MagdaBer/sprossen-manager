import React from 'react';
import Typography from './Typography';
import { TypographyTypes } from '../../enums/TypographyTypes';

export default {
  title: 'Component/Typography',
  component: Typography,
};

export const ExtraSmall = (): JSX.Element => (
  <Typography size={TypographyTypes.XS}>this is very small text</Typography>
);

export const SmallAction = (): JSX.Element => (
  <Typography size={TypographyTypes.XSACTION}>
    this is a small action text
  </Typography>
);

export const Small = (): JSX.Element => (
  <Typography size={TypographyTypes.S}>this is small text</Typography>
);

export const Medium = (): JSX.Element => (
  <Typography size={TypographyTypes.M}>this is regular size text</Typography>
);

export const Large = (): JSX.Element => (
  <Typography size={TypographyTypes.L}>this is large text</Typography>
);

export const ExtraLarge = (): JSX.Element => (
  <Typography size={TypographyTypes.XL}>this is very large text</Typography>
);

export const All = (): JSX.Element => (
  <>
    <Typography size={TypographyTypes.XS}>this is very small text</Typography>
    <Typography size={TypographyTypes.XSACTION}>
      this is small action text
    </Typography>
    <Typography size={TypographyTypes.S}>this is small text</Typography>
    <Typography size={TypographyTypes.M}>this is regular size text</Typography>
    <Typography size={TypographyTypes.L}>this is large text</Typography>
    <Typography size={TypographyTypes.XL}>this is very large text</Typography>
  </>
);
