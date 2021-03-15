
import { styled } from '../lib/stitches';

export const Link = styled('a', {
  display: 'inline-block',
  outlineColor: '$primary',

  '&:hover': {
    opacity: 0.9,
  },

  variants: {
    color: {
      default: {
        color: '$primary',
      },
      white: {
        color: '$white',
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
        color: '$blue600',
      },
      success: {
        color: '$green600',
      },
      warning: {
        color: '$yellow600',
      },
      error: {
        color: '$red600',
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
    text: {
      true: {
        textDecoration: 'none',

        '&:hover': {
          textDecoration: 'underline',
        },
        '&:focus': {
          textDecoration: 'underline',
        },
      }
    },
    ghost: {
      true: {
        textDecoration: 'none',
      },
    },
    bold: {
      true: {
        fontWeight: 600,
      },
    },
  },
  defaultVariants: {
    size: 'base',
    color: 'accent',
  },
});
