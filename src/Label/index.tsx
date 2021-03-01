import * as RadixLabel from '@radix-ui/react-label';
import { styled } from '../lib/stitches';

export const Label = styled(RadixLabel.Root, {
  display: 'inline-block',
  marginBottom: '$10',

  variants: {
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
    size: 'base',
    color: 'primary',
  },
});
