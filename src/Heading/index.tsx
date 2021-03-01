import { styled } from '../lib/stitches';

export const Heading = styled('h1', {
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
        letterSpacing: '-0.055em',
      },
      sm: {
        fontType: 'sm',
        fontWeight: 600,
        letterSpacing: '-0.055em',
      },
      base: {
        fontType: 'base',
        fontWeight: 600,
        letterSpacing: '-0.055em',
      },
      lg: {
        fontType: 'lg',
        fontWeight: 600,
        letterSpacing: '-0.055em',
      },
      xl: {
        fontType: 'xl',
        fontWeight: 600,
        letterSpacing: '-0.055em',
      },
      '2xl': {
        fontType: '2xl',
        fontWeight: 700,
        letterSpacing: '-0.055em',
      },
      '3xl': {
        fontType: '3xl',
        fontWeight: 700,
        letterSpacing: '-0.025em',
      },
      '4xl': {
        fontType: '4xl',
        fontWeight: 700,
        letterSpacing: '-0.025em',
      },
      '5xl': {
        fontType: '5xl',
        fontWeight: 500,
        letterSpacing: '-0.055em',
      },
      '6xl': {
        fontType: '6xl',
        fontWeight: 500,
        letterSpacing: '-0.055em',
      },
      '7xl': {
        fontType: '7xl',
        fontWeight: 500,
        letterSpacing: '-0.055em',
      },
      '8xl': {
        fontType: '8xl',
        fontWeight: 500,
        letterSpacing: '-0.055em',
      },
      '9xl': {
        fontType: '9xl',
        fontWeight: 500,
        letterSpacing: '-0.055em',
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
