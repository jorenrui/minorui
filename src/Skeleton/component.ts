import { StitchesVariants } from '@stitches/core';
import { keyframes, styled } from '../lib/stitches';

const shimmer = keyframes({
  '0%': {
    transform: 'translateX(0)',
    WebkitTransform: 'translateX(0)',
  },
  '100%': {
    transform: 'translateX(100%)',
    WebkitTransform: 'translateX(100%)',
  },
});

export const StyledSkeleton = styled('span', {
  width: '100%',
  position: 'relative',
  overflow: 'hidden',
  backgroundColor: '$gray300',

  variants: {
    display: {
      inline: {
        display: 'inline-block',
      },
      block: {
        display: 'block',
        margin: '$3',
      },
    },
    type: {
      heading: {
        height: '$6',
      },
      text: {
        height: '$4',
      },
      caption: {
        height: '$3',
      },
      avatar: {
        height: '$8',
        width: '$8',
        borderRadius: '$full',
      },
    },
  },
  defaultVariants: {
    type: 'text',
    display: 'block',
  },

  '&::after': {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    transform: 'translateX(-100%)',
    backgroundImage: `linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0,
      rgba(255, 255, 255, 0.2) 20%,
      rgba(255, 255, 255, 0.5) 60%,
      rgba(255, 255, 255, 0)
    )`,
    animation: `${shimmer} 2s infinite`,
    content: '""',
  },
});

export type ISkeletonVariants = StitchesVariants<typeof StyledSkeleton>;
