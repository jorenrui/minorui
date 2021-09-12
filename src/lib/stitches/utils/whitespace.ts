import type * as Stitches from '@stitches/react';

export const WHITESPACE = {
  m: (value: Stitches.ScaleValue<'space'>) => ({
    marginTop: value,
    marginBottom: value,
    marginLeft: value,
    marginRight: value,
  }),
  mt: (value: Stitches.ScaleValue<'space'>) => ({
    marginTop: value,
  }),
  mr: (value: Stitches.ScaleValue<'space'>) => ({
    marginRight: value,
  }),
  mb: (value: Stitches.ScaleValue<'space'>) => ({
    marginBottom: value,
  }),
  ml: (value: Stitches.ScaleValue<'space'>) => ({
    marginLeft: value,
  }),
  mx: (value: Stitches.ScaleValue<'space'>) => ({
    marginLeft: value,
    marginRight: value,
  }),
  my: (value: Stitches.ScaleValue<'space'>) => ({
    marginTop: value,
    marginBottom: value,
  }),
  p: (value: Stitches.ScaleValue<'space'>) => ({
    paddingTop: value,
    paddingBottom: value,
    paddingLeft: value,
    paddingRight: value,
  }),
  pt: (value: Stitches.ScaleValue<'space'>) => ({
    paddingTop: value,
  }),
  pr: (value: Stitches.ScaleValue<'space'>) => ({
    paddingRight: value,
  }),
  pb: (value: Stitches.ScaleValue<'space'>) => ({
    paddingBottom: value,
  }),
  pl: (value: Stitches.ScaleValue<'space'>) => ({
    paddingLeft: value,
  }),
  px: (value: Stitches.ScaleValue<'space'>) => ({
    paddingLeft: value,
    paddingRight: value,
  }),
  py: (value: Stitches.ScaleValue<'space'>) => ({
    paddingTop: value,
    paddingBottom: value,
  }),
  linearGradient: (value: (string & {})) => ({
    backgroundImage: `linear-gradient(${value})`,
  }),
  br: (value: Stitches.ScaleValue<'radii'>) => ({
    borderRadius: value,
  }),
};
