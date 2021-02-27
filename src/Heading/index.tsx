import { StitchesVariants } from '@stitches/core';
import { styled } from '../lib/stitches';

export const Heading = styled('h1', {
  letterSpacing: '-0.055em',

  variants: {
    overflow: {
      truncate: {
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
      },
      ellipsis: {
        textOverflow: 'ellipsis',
      },
      clip: {
        textOverflow: 'clip',
      },
    },
    size: {
      xs: {
        fontType: 'xs',
        fontWeight: 600,
      },
      sm: {
        fontType: 'sm',
        fontWeight: 600,
      },
      base: {
        fontType: 'base',
        fontWeight: 600,
      },
      lg: {
        fontType: 'lg',
        fontWeight: 600,
      },
      xl: {
        fontType: 'xl',
        fontWeight: 600,
      },
      '2xl': {
        fontType: '2xl',
        fontWeight: 600,
      },
      '3xl': {
        fontType: '3xl',
        fontWeight: 500,
      },
      '4xl': {
        fontType: '4xl',
        fontWeight: 500,
      },
      '5xl': {
        fontType: '5xl',
        fontWeight: 500,
      },
      '6xl': {
        fontType: '6xl',
        fontWeight: 500,
      },
      '7xl': {
        fontType: '7xl',
        fontWeight: 500,
      },
      '8xl': {
        fontType: '8xl',
        fontWeight: 500,
      },
      '9xl': {
        fontType: '9xl',
        fontWeight: 500,
      },
    },
    color: {
      primary: {
        color: '$primary',
      },
      secondary: {
        color: '$primary800',
      },
      tertiary: {
        color: '$primary700',
      },
      accent: {
        color: '$accent',
      },
      info: {
        color: '$info',
      },
      warning: {
        color: '$warning',
      },
      positive: {
        color: '$positive',
      },
      negative: {
        color: '$negative',
      },
    },
  },
  defaultVariants: {
    size: 'xl',
    color: 'primary',
  },
});

export type IHeadingVariants = StitchesVariants<typeof Heading>;
