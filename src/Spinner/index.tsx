import { keyframes, styled } from '../lib/stitches';

const rotate = keyframes({
  '0%': {
    transform: 'rotate(0deg)',
  },
  '100%': {
    transform: 'rotate(360deg)',
  },
});

export const Spinner = styled('span', {
  display: 'inline-block',
  position: 'relative',
  top: '$10',
  borderRadius: '$full',
  transform: 'translateZ(0)',
  MsTransform: 'translateZ(0)',
  WebkitTransform: 'translateZ(0)',
  WebkitAnimation: `${rotate} 1.1s infinite linear`,
  animation: `${rotate} 1.1s infinite linear`,
  borderStyle: 'solid',

  '&:after': {
    borderRadius: '$full',
  },

  variants: {
    color: {
      primary: {
        borderLeftColor: '$white',
        borderTopColor: '$primary',
        borderRightColor: '$primary',
        borderBottomColor: '$primary',
      },
      secondary: {
        borderLeftColor: '$primary',
        borderTopColor: '$white',
        borderRightColor: '$white',
        borderBottomColor: '$white',
      },
    },
    size: {
      large: {
        width: '$350',
        height: '$350',

        '&::after': {
          width: '$350',
          height: '$350',
        }
      },
      medium: {
        width: '$50',
        height: '$50',

        '&::after': {
          width: '$250',
          height: '$250',
        }
      },
      small: {
        width: '$200',
        height: '$200',

        '&::after': {
          width: '$200',
          height: '$200',
        }
      },
      mini: {
        width: '$150',
        height: '$150',

        '&::after': {
          width: '$150',
          height: '$150',
        }
      },
    },
  },
  defaultVariants: {
    color: 'primary',
    size: 'medium',
  },
});
