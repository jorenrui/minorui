import { StitchesVariants } from '@stitches/core';
import { styled } from '../lib/stitches';

export const Heading = styled('h1', {
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
  color: '$text',
  fontWeight: 600,

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
      },
      sm: {
        fontType: 'sm',
      },
      base: {
        fontType: 'base',
      },
      lg: {
        fontType: 'lg',
      },
      xl: {
        fontType: 'xl',
      },
      '2xl': {
        fontType: '2xl',
      },
      '3xl': {
        fontType: '3xl',
      },
      '4xl': {
        fontType: '4xl',
      },
      '5xl': {
        fontType: '5xl',
      },
      '6xl': {
        fontType: '6xl',
      },
      '7xl': {
        fontType: '7xl',
      },
      '8xl': {
        fontType: '8xl',
      },
      '9xl': {
        fontType: '9xl',
      },
    },
  },
  defaultVariants: {
    size: 'xl',
  },
});

export type IHeadingVariants = StitchesVariants<typeof Heading>;
